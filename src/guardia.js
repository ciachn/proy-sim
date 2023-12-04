
import { person_attention_delay, person_reaction_delay, person_walk_velocity, simulationTime } from './config';
import { IMG } from './images';
import { freeze, randItem, val } from './random';
import { crearObjeto } from './utils';

const image_name = randItem([
    'guard_1',
]);

function moveTo (targetX, targetY, callback=null)
{
    this.srcX = this.x;
    this.srcY = this.y;
    this.moveCallback = callback;

    this.targetX = targetX;
    this.targetY = targetY;
    this.velocity = person_walk_velocity;

    this.mode = 'moving';
}

function advance (dt)
{
    if (this.mode === 'moving')
    {
        let targetX = val(this.targetX);
        let targetY = val(this.targetY);
        let speed = val(this.velocity);

        let angle = Math.atan2(targetY - this.y, targetX - this.x);
        this.x += speed*dt*Math.cos(angle);
        this.y += speed*dt*Math.sin(angle);

        let remaining = Math.sqrt(Math.pow(targetX - this.x, 2) + Math.pow(targetY - this.y, 2));
        if (remaining < 1.0)
        {
            this.mode = 'idle';

            if (this.moveCallback) {
                this.targetX = freeze(this.targetX);
                this.targetY = freeze(this.targetY);
                let tmp = this.moveCallback;
                this.moveCallback = null;
                tmp(this);
            }
        }
    }
}

export default (ctx, parent, x, y) => {
    let obj = crearObjeto(ctx, parent, IMG[image_name()], val(x), val(y));
    Object.assign(obj, {
        "moveTo": moveTo,
        "advance": advance,
        "mode": "idle",

        "ocupado": false,
    });

    return obj;
};
