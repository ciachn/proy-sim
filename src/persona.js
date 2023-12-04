
import { person_attention_delay, person_reaction_delay, person_walk_velocity } from './config';
import { IMG } from './images';
import { freeze, randItem, val } from './random';
import { crearObjeto } from './utils';

const image_name = randItem([
    'person_1',
    'person_2',
    'person_3',
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
    if (this.mode == 'waiting_line')
    {
        this.delay -= dt;
        if (this.delay > 0) return;
        this.delay = person_attention_delay();

        let targetX = val(this.targetX);
        let targetY = val(this.targetY);
        let remaining = Math.sqrt(Math.pow(targetX - this.x, 2) + Math.pow(targetY - this.y, 2));
        if (remaining > 1.0) {
            this.mode = 'moving_delay';
            this.delay = person_reaction_delay();
        }

        this.wait_time -= dt;
        this.process_time -= dt;
        return;
    }

    if (this.mode === 'moving_delay')
    {
        this.delay -= dt;
        if (this.delay > 0) return;

        this.mode = 'moving';
        return;
    }

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
            this.delay = person_attention_delay();
            this.mode = 'waiting_line';

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
        "saliendo": false,
        "wait_time": 0,
        "process_time": 0,
    });

    return obj;
};
