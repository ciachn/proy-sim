import { crearCanvas, crearObjeto, crearReloj, crearSimulador, formatTime, loadImages, makeTime, rad } from './utils';
import { atKey, delta, ident, last, randItem, randValue } from './random';
import { simulationTime, person_arrival_delay, guard_arrival_time, bank_opening_time, bank_closing_time, OUTSIDE_CAPACITY, INSIDE_CAPACITY, person_outside_wait_time, person_inside_wait_time, person_inside_process_time } from './config';
import { signal, expr } from 'riza';

import { IMG } from './images';
import Persona from './persona';
import Guardia from './guardia';

const getSpawnPoint = randItem([
    [ -25, 515 ],
    [ -25, 587 ],
    [ -25, 720 ],
    [ 96, 800 ],
    [ 260, 800 ],
    [ 380, 800 ],
    [ 545, 800 ],
    [ 635, 800 ],
    [ 700, 800 ],
    [ 825, 800 ],
    [ 940, 800 ],
    [ 1030, 800 ],
    [ 1170, 800 ],
    [ 1160, 800 ],
    [ 1370, 745 ],
    [ 1370, 685 ],
    [ 1370, 600 ],
    [ 1370, 500 ],
]);

const posicionFila = [660, 480];
const posicionPuerta = [662, 475];
const posicionGuardia1 = [633, 472];
const posicionGuardia2 = [686, 472];

const C_DEBUG = '#fff';
const C_BANK = '#f0f';
const C_FAILURE = '#f33';
const C_SUCCESS = '#0c0';

function prepararSimulacion (ctx)
{
    let bancoExterior = crearObjeto(ctx, null, IMG.bank_open, 400, 10);
    let bancoCerrado = crearObjeto(ctx, null, IMG.bank_closed, 400, 10);
    let colaExterna = [ { x: posicionFila[0], y: posicionFila[1] } ];
    let colaInterna = [ ];
    let colaGuardias = [];

    let ultimo = last(colaExterna);
    let ultimoX = atKey('x', ultimo);
    let ultimoY = atKey('y', ultimo);

    const statPersonas = signal(0);
    const statFallos = signal(0);
    const statExitos = signal(0);

    const statEsperaExternaT = signal(0);
    const statEsperaExternaN = signal(1);
    const statEsperaInternaT = signal(0);
    const statEsperaInternaN = signal(1);

    const statAfuera = signal(0);
    const statAdentro = signal(0);

    let contadorPersonas = <span style="position:absolute; left:16px; top:20px; color:#c0c;">Total Clientes: <b>{statPersonas}</b></span>;
    document.body.append(contadorPersonas);
    let contadorFallos = <span style="position:absolute; left:16px; top:40px; color:#c0c;">Total Fallos: <b>{statFallos}</b></span>;
    document.body.append(contadorFallos);
    let contadorExitos = <span style="position:absolute; left:16px; top:60px; color:#c0c;">Total Exitos: <b>{statExitos}</b></span>;
    document.body.append(contadorExitos);
    let contadorEsperaExternaT = <span style="position:absolute; left:16px; top:90px; color:#c0c;">Prom. Espera Entrar: <b>{expr([statEsperaExternaT, statEsperaExternaN], (t, n) => formatTime(t/n))}</b></span>;
    document.body.append(contadorEsperaExternaT);
    let contadorEsperaInternaT = <span style="position:absolute; left:16px; top:110px; color:#c0c;">Prom. Espera Salir: <b>{expr([statEsperaInternaT, statEsperaInternaN], (t, n) => formatTime(t/n))}</b></span>;
    document.body.append(contadorEsperaInternaT);
    let contadorAfuera = <span style="position:absolute; left:16px; top:140px; color:#c0c;">Clientes Afuera: <b>{statAfuera}</b></span>;
    document.body.append(contadorAfuera);
    let contadorAdentro = <span style="position:absolute; left:16px; top:160px; color:#c0c;">Clientes Adentro: <b>{statAdentro}</b></span>;
    document.body.append(contadorAdentro);

    ctx.log.write(C_DEBUG, 'Inicio de simulación');

    ctx.canvas.addEventListener('click', () => {
        if (!ctx.paused) {
            ctx.log.write(C_DEBUG, 'Pausa');
            ctx.pause();
        } else {
            ctx.log.write(C_DEBUG, 'Resumiendo');
            ctx.resume();
        }
    });

    ctx.quitarPersona = function (persona, cola=null) {
        cola = cola ?? colaExterna;

        let index = cola.indexOf(persona);
        if (index === -1) {
            if (cola === colaExterna)
                ctx.quitarPersona(persona, colaInterna);
            return;
        }

        if (index === cola.length-1) {
            cola.pop();
            return;
        }

        cola[index+1].targetX = cola[index].targetX;
        cola[index+1].targetY = cola[index].targetY;
        cola.splice(index, 1);
    };

    function touchDelay (cola, fn_delay, ratio) {
        for (let persona of cola) {
            persona.wait_time += fn_delay() * ratio;
        }
    };

    ctx.alarm(bank_opening_time(), () => {
        if (bancoCerrado.visible && colaGuardias.length > 0) {
            ctx.log.write(C_BANK, `Banco abrió, E=${colaExterna.length}`);
            bancoCerrado.visible = false;
        }
    });

    ctx.alarm(bank_closing_time(), () => {
        ctx.log.write(C_BANK, `Banco cerró, E=${colaExterna.length}, I=${colaInterna.length}`);
        bancoCerrado.visible = 2;
    });

    ctx.interval(1, () => {
        statAfuera.value = colaExterna.length - 1;
        statAdentro.value = colaInterna.length;

        if (bancoCerrado.visible == 2 && colaExterna.length == 1 && colaInterna.length == 0) {
            ctx.log.write(C_DEBUG, 'Fin de simulación');
            ctx.stop();
        }
    });

    ctx.alarm(guard_arrival_time(), () => {
        let posicion = getSpawnPoint();
        let guardia = Guardia(ctx, bancoExterior, posicion[0], posicion[1]);
        guardia.moveTo(posicionGuardia1[0], posicionGuardia1[1], (guardia) => {
            guardia.posX = guardia.x;
            guardia.posY = guardia.y;
            ctx.log.write(C_BANK, `Llegó un Guardia, E=${colaExterna.length}, I=${colaInterna.length}`);
            colaGuardias.push(guardia);
            if (simulationTime() >= bank_opening_time() && bancoCerrado.visible) {
                ctx.log.write(C_BANK, `Banco abrió, E=${colaExterna.length}`);
                bancoCerrado.visible = false;
            }
        });
    });

    ctx.alarm(guard_arrival_time(), () => {
        let posicion = getSpawnPoint();
        let guardia = Guardia(ctx, bancoExterior, posicion[0], posicion[1]);
        guardia.moveTo(posicionGuardia2[0], posicionGuardia2[1], (guardia) => {
            guardia.posX = guardia.x;
            guardia.posY = guardia.y;
            ctx.log.write(C_BANK, `Llegó un Guardia, E=${colaExterna.length}, I=${colaInterna.length}`);
            colaGuardias.push(guardia);
            if (simulationTime() >= bank_opening_time() && bancoCerrado.visible) {
                ctx.log.write(C_BANK, `Banco abrió, E=${colaExterna.length}`);
                bancoCerrado.visible = false;
            }
        });
    });

    ctx.alarm(simulationTime() + person_arrival_delay(), function spawnPerson ()
    {
        if (bancoCerrado.visible == 2) {
            ctx.log.write(C_FAILURE, `Cliente potencial, banco cerrado`);
            return;
        }

        ctx.alarm(simulationTime() + person_arrival_delay(), spawnPerson);

        let posicion = getSpawnPoint();
        let persona = Persona(ctx, bancoExterior, posicion[0], posicion[1]);
        persona.entryX = posicion[0];
        persona.entryY = posicion[1];
        persona.arrival_time = simulationTime();
        persona.wait_time = person_outside_wait_time();
        persona.moveTo(delta(-24, ultimoX), ultimoY, (persona) => {
            ctx.log.write(C_SUCCESS, `Llegó un Cliente, E=${colaExterna.length}, I=${colaInterna.length}`);
            statPersonas.value++;
            colaExterna.push(persona);
        });
    });

    ctx.interval(1, function irseSinServicio()
    {
        // cola externa
        for (let i = 1; i < colaExterna.length; i++) {
            let persona = colaExterna[i];

            // demasiado tiempo en cola
            if (persona.wait_time <= 0) {
                ctx.quitarPersona(persona);
                touchDelay(colaExterna, person_outside_wait_time, 0.25);
                persona.moveTo(persona.entryX, persona.entryY, (persona) => {
                    ctx.log.write(C_FAILURE, `Cliente se fue, demasiado tiempo, Tt=${formatTime(simulationTime() - persona.arrival_time)}, E=${colaExterna.length}`);
                    statFallos.value++;
                    persona.remove();
                });
                i--;
                continue;
            }

            // ya cerraron el banco
            if (simulationTime() > bank_closing_time()) {
                ctx.quitarPersona(persona);
                touchDelay(colaExterna, person_outside_wait_time, 0.25);
                persona.moveTo(persona.entryX, persona.entryY, (persona) => {
                    ctx.log.write(C_FAILURE, `Cliente se fue, banco cerró, Tt=${formatTime(simulationTime() - persona.arrival_time)}, E=${colaExterna.length}`);
                    statFallos.value++;
                    persona.remove();
                });
                i--;
                continue;
            }
        }

        // cola interna
        for (let i = 0; i < colaInterna.length; i++) {
            let persona = colaInterna[i];

            // demasiado tiempo en cola
            if (persona.wait_time <= 0)
            {
                ctx.quitarPersona(persona);
                touchDelay(colaInterna, person_inside_wait_time, 0.25);
                persona.visible = true;
                persona.moveTo(persona.entryX, persona.entryY, (persona) => {
                    ctx.log.write(C_FAILURE, `Cliente se fue, demasiado tiempo, Tt=${formatTime(simulationTime() - persona.arrival_time)}, Ti=${formatTime(simulationTime() - persona.entry_time)}, I=${colaInterna.length}`);
                    statEsperaInternaT.value += simulationTime() - persona.entry_time;
                    statEsperaInternaN.value++;
                    statFallos.value++;
                    persona.remove();
                });
                i--;
                continue;
            }

            // procesamiento completado
            if (persona.process_time <= 0)
            {
                ctx.quitarPersona(persona);
                touchDelay(colaInterna, person_inside_wait_time, 0.25);
                persona.visible = true;
                persona.moveTo(persona.entryX, persona.entryY, (persona) => {
                    ctx.log.write(C_FAILURE, `Cliente se fue, exitoso, Tt=${formatTime(simulationTime() - persona.arrival_time)}, Ti=${formatTime(simulationTime() - persona.entry_time)}, I=${colaInterna.length}`);
                    statEsperaInternaT.value += simulationTime() - persona.entry_time;
                    statEsperaInternaN.value++;
                    statExitos.value++;
                    persona.remove();
                });
                i--;
                continue;
            }
        }
    });

    ctx.interval(1, function entrarAlBanco()
    {
        if (bancoCerrado.visible || colaExterna.length == 1 || colaInterna.blocked || colaInterna.length >= INSIDE_CAPACITY)
            return;

        colaInterna.blocked = true;

        let persona = colaExterna.at(1);
        ctx.quitarPersona(persona);
        touchDelay(colaExterna, person_outside_wait_time, 0.25);

        colaInterna.push(persona);
        persona.entry_time = simulationTime();
        persona.wait_time = person_inside_wait_time();
        persona.process_time = person_inside_process_time();

        ctx.log.write(C_SUCCESS, `Cliente entró al Banco, Tt=${formatTime(simulationTime() - persona.arrival_time)}, E=${colaExterna.length}, I=${colaInterna.length}`);
        statEsperaExternaT.value += simulationTime() - persona.arrival_time;
        statEsperaExternaN.value++;
        persona.moveTo(posicionPuerta[0], posicionPuerta[1], (persona) => {
            persona.visible = false;
            colaInterna.blocked = false;
        });
    });

    ctx.interval(1, function checkCola()
    {
        let total = colaExterna.reduce((count, persona) => count + (persona.saliendo ? 0 : 1), 0);
        if (total <= OUTSIDE_CAPACITY)
            return;

        let guardia = colaGuardias.find((guardia) => !guardia.ocupado);
        if (!guardia) return;

        let persona = colaExterna.at(-1);
        if (!persona || persona.saliendo) return;

        guardia.ocupado = true;
        ctx.log.write(C_BANK, `Guardia ocupado, E=${colaExterna.length}, I=${colaInterna.length}`);

        persona.saliendo = true;

        guardia.moveTo(atKey('x', persona), delta(30, atKey('y', persona)), (guardia) =>
        {
            ctx.log.write(C_FAILURE, `Cliente se fué, cola limite, E=${colaExterna.length}`);
            ctx.quitarPersona(persona);
            touchDelay(colaExterna, person_outside_wait_time, 0.25);
            persona.moveTo(persona.entryX, persona.entryY, (persona) => {
                persona.remove();
            });

            guardia.ocupado = false;
            ctx.log.write(C_BANK, `Guardia libre, E=${colaExterna.length}, I=${colaInterna.length}`);
            guardia.moveTo(guardia.posX, guardia.posY, (guardia) => {
            });
        });
    });
};

/**
 * Crea un objeto de simulador para agregarlo al documento.
 * @returns {HTMLCanvasElement}
 */
const Simulacion = () => {

    canvas = crearCanvas();
    let ctx = canvas.getContext('2d');

    loadImages(IMG).then(() => {
        crearSimulador(canvas, ctx);
        prepararSimulacion(ctx);
    });

    return canvas;
};

document.body.appendChild( Simulacion() );
