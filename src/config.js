import { randValue } from './random';
import { makeTime } from './utils';

export const TIME_SCALE = 12*60 / 2; // 12 horas en 5 minutos
export const PIXELS_PER_METER = 40/1.5; // 40 pixels = 1.5 m
export const OUTSIDE_CAPACITY = 25;
export const INSIDE_CAPACITY = 18;

export const bank_opening_time = randValue(makeTime(9,0), makeTime(9,30)); // 09:00am a 09:30am
export const bank_closing_time = randValue(makeTime(17,0), makeTime(17,30)); // 05:00pm a 05:30pm

export const person_arrival_delay = randValue(makeTime(0,60/25), makeTime(0,60/8)); // 8 a 25 personas por hora
export const person_walk_velocity = randValue(0.90, 1.34); // Metros por segundo
export const person_attention_delay = randValue(3.0, 6.0); // Segundos
export const person_reaction_delay = randValue(3.0, 8.0); // Segundos

export const person_outside_wait_time = randValue(makeTime(0, 10), makeTime(0, 20)); // 10 a 20 minutos
export const person_inside_wait_time = randValue(makeTime(0, 10), makeTime(0, 20)); // 10 a 20 minutos
export const person_inside_process_time = randValue(makeTime(0, 10), makeTime(0, 90)); // 10 a 90 minutos

export const guard_arrival_time = randValue(makeTime(8,30), makeTime(9,10)); // 08:30am a 09:10am

let currentTime = makeTime(8,0); // Starts at 8:00am
export function simulationTime (value=null) {
    if (value !== null)
        currentTime += value;
    return currentTime;
}
