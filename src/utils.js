
import { signal, expr } from 'riza';
import { IMG } from './images';
import { TIME_SCALE, simulationTime } from './config';

/**
 * Retorna tiempo en segundos formado con los datos especificados.
 * @param {number} hh
 * @param {number} [mm]
 * @param {number} [ss]
 * @returns {number}
 */
export function makeTime (hh, mm=0, ss=0) {
    return (hh*60 + mm)*60 + ss;
}

/**
 * Retorna una cadena con el tiempo en formato HH:MM:SS.
 * @param {number} value
 * @returns {string}
 */
export function formatTime (value)
{
    let hh = Math.floor(value / 3600);
    let mm = Math.floor((value % 3600) / 60);
    let ss = Math.floor(value % 60);
    return hh.toString().padStart(2, '0') + ':' + mm.toString().padStart(2, '0') + ':' + ss.toString().padStart(2, '0');
}


/**
 * Retorna el valor de interpolacion entre a y b al momento t.
 * @param {number} a
 * @param {number} b
 * @param {number} t
 * @returns {number}
 */
export function lerp (a, b, t) {
    return a + (b - a) * t;
}

/**
 * Convierte un valor de grados a radianes.
 * @param {number} value
 * @returns {number}
 */
export function rad (value) {
    return value * Math.PI / 180;
}

/**
 * Carga una imagen desde una URL.
 * @param {string} url
 * @returns {Promise<Image>}
 */
export function loadImage (url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve(image);
        };
        image.src = url;
        return image;
    });
}

/**
 * Carga un conjunto de imagenes.
 * @param {key: url} urlMap
 * @returns {Promise<void>}
 */
export async function loadImages (urlMap) {
    let loaders = await Promise.allSettled(Object.values(urlMap).map(loadImage));
    Object.keys(urlMap).forEach((key, index) => {
        urlMap[key] = loaders[index].value;
    });
}

/**
 * Crea un canvas que ocupe toda la pantalla.
 * @returns {HTMLCanvasElement}
 */
export function crearCanvas ()
{
    let canvas = <canvas/>;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    Object.assign(canvas.style, {
        position: 'absolute', left: '0', top: '0',
        width: canvas.width + 'px',
        height: canvas.height + 'px',
    });

    return canvas;
}

/**
 * Crea un objeto que se puede dibujar en el canvas.
 * @param {CanvasRenderingContext2D} ctx
 * @param {object|null} parent
 * @param {Image} img 
 * @param {number} x 
 * @param {number} y 
 * @param {number} width 
 * @param {number} height 
 * @returns {object}
 */
export function crearObjeto (ctx, parent, img, x=0, y=0, width=0, height=0)
{
    if (width === 0) width = img.width;
    if (height === 0) height = img.height;

    if (x === -1)
        x = (ctx.canvas.width - width) / 2;
    if (y === -1)
        y = (ctx.canvas.height - height) / 2;

    const obj = {
        "x": x,
        "y": y, 
        "width": width,
        "height": height,
        "visible": true,

        "parent": null,
        "children": [],

        "addObject": function (obj) {
            obj.parent = this;
            this.children.push(obj);
        },

        "removeObject": function (obj) {
            let index = this.children.indexOf(obj);
            if (index !== -1) {
                this.children.splice(index, 1);
            }
        },

        "remove": function() {
            if (this.parent)
                this.parent.removeObject(this);
            else
                ctx.removeObject(this);
        },

        "draw": function () {
            if (!this.visible) return;
            ctx.drawImage(img, this.x, this.y, this.width, this.height);
            ctx.save();
            ctx.translate(this.x, this.y);
            for (let child of this.children) {
                if ('draw' in child) child.draw(ctx, this);
            }
            ctx.restore();
        },

        "update": function(dt) {
            this.advance(dt);
            for (let child of this.children) {
                if ('update' in child) child.update(dt, this);
            }
        },

        "advance": function(dt) {
        }
    };

    if (parent === null)
        ctx.addObject(obj);
    else
        parent.addObject(obj);

    return obj;
}

/**
 * Crea un reloj para visualizar el tiempo de simulacion.
 * @param {CanvasRenderingContext2D} ctx
 * @returns { [object, HTMLSpanElement] }
 */
export function crearReloj (ctx)
{
    const offsX = 230;
    let clock = crearObjeto(ctx, null, IMG.clock, 16+offsX, 16);
    let currentTime = signal(0);

    clock.addObject
    ({
        update: function (dt) {
            currentTime.set(Math.floor(simulationTime()));
        },

        draw: function (ctx, parent)
        {
            let cx = 0.5*parent.width;
            let cy = 0.5*parent.height;

            let angle = 2*Math.PI*(((simulationTime()/1)%60)/60);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + 30*Math.cos(Math.PI*0.5-angle), cy + -30*Math.sin(Math.PI*0.5-angle));
            ctx.strokeStyle = '#f00';
            ctx.lineWidth = 1;
            ctx.stroke();

            angle = 2*Math.PI*(((simulationTime()/60)%60)/60);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + 30*Math.cos(Math.PI*0.5-angle), cy + -30*Math.sin(Math.PI*0.5-angle));
            ctx.strokeStyle = '#f00';
            ctx.lineWidth = 1;
            ctx.stroke();

            angle = 2*Math.PI*(((simulationTime()/3600)%12)/12);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + 27*Math.cos(Math.PI*0.5-angle), cy + -27*Math.sin(Math.PI*0.5-angle));
            ctx.strokeStyle = '#f00';
            ctx.lineWidth = 3;
            ctx.stroke();
        }
    });

    let timeLabel = <span style={"position:absolute; left:"+(80+offsX)+"px; top:145px; transform:translateX(-50%);"}>
        {expr([currentTime], value => formatTime(value))}
    </span>;
    document.body.appendChild(timeLabel);

    return [clock, timeLabel];
}

/**
 * Crea un log para visualizar las acciones de la simulacion.
 * @param {CanvasRenderingContext2D} ctx
 * @returns { write: function(message: string) }
 */
export function crearLog (ctx)
{
    let div = <div style="position:absolute; left:13px; top:200px; width:370px; height:595px; resize:none; overflow-y:auto; font-size:14px; font-family:Consolas; background:#000; color:#fff; border:none; outline:none; padding:0.5rem; box-sizing: border-box; border-radius: 0.3rem;"/>
    document.body.appendChild(div);

    div.write = function (color, message) {
        let line = <div style:color={color}><span style:color="#0ff">{formatTime(simulationTime())}</span> {message}</div>;
        div.prepend(line);
    };

    return div;
}

/**
 * Crea un simulador.
 * @param {HTMLCanvasElement} canvas
 * @param {CanvasRenderingContext2D} ctx
 */
export function crearSimulador (canvas, ctx)
{
    ctx.objects = [];
    ctx.timeouts = [];
    ctx.paused = false;
    ctx.stopped = false;

    ctx.addObject = function (obj) {
        this.objects.push(obj);
    };

    ctx.removeObject = function (obj) {
        let index = this.objects.indexOf(obj);
        if (index !== -1) {
            this.objects.splice(index, 1);
        }
    };

    ctx.timeout = function (delta, callback) {
        this.timeouts.push({
            "timeout": simulationTime() + delta,
            "callback": callback,
            "loop": 0,
        });
    };

    ctx.alarm = function (time, callback) {
        this.timeouts.push({
            "timeout": time,
            "callback": callback,
            "loop": 0,
        });
    };

    ctx.interval = function (delta, callback) {
        this.timeouts.push({
            "timeout": simulationTime() + delta,
            "callback": callback,
            "loop": delta,
        });
    };

    ctx.advance = function (dt) {
    };

    let lastFrame = performance.now();

    ctx.stop = function() {
        this.stopped = true;
    };

    ctx.pause = function () {
        this.paused = true;
    };

    ctx.resume = function () {
        this.paused = false;
        lastFrame = performance.now();
    };

    const loop = function ()
    {
        if (ctx.stopped) return;

        if (ctx.paused) {
            requestAnimationFrame(loop);
            return;
        }

        canvas.width = canvas.width;

        let curFrame = performance.now();
        let dt = ((curFrame - lastFrame) / 1000) * TIME_SCALE;
        lastFrame = curFrame;
        simulationTime(dt);

        ctx.advance(dt);
        for (let obj of ctx.objects) {
            obj.update(dt);
            obj.draw();
        }

        let curTime = simulationTime();
        for (let i = 0; i < ctx.timeouts.length; i++) {
            if (curTime >= ctx.timeouts[i].timeout) {
                ctx.timeouts[i].callback();
                if (!ctx.timeouts[i].loop) {
                    ctx.timeouts.splice(i, 1);
                    i--;
                } else {
                    ctx.timeouts[i].timeout = curTime + ctx.timeouts[i].loop;
                }
            }
        }

        requestAnimationFrame(loop);
    };

    loop();

    ctx.clock = crearReloj(ctx);
    ctx.log = crearLog(ctx);
}
