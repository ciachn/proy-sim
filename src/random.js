
/**
 * Retornar um número aleatório de 16-bits (0 a 65,535).
 * @returns {number}
 */
export function rand16() {
    return (Math.random() * 0x10000) & 0xFFFF;
}

/**
 * Retorna una funcion que retorna un elemento aleatorio del arreglo.
 * @param {array} arr 
 * @returns {function}
 */
export function randItem (arr) {
    return () => arr[ rand16() % arr.length ];
};

/**
 * Retorna una funcion que retorna un numero aleatorio entre min y max.
 * @param {number} min
 * @param {number} max
 * @returns {function}
 */
export function randValue (min, max) {
    return () => min + rand16() % (max - min);
}

/**
 * Retorna una funcion que retorna el valor dado.
 * @param {*} value
 * @returns {function}
 */
export function ident (value) {
    return () => value;
}

/**
 * Retorna el valor de la funcion dada, o simplemente el valor dado si no es una función.
 * @param {*|function} value
 * @returns {*}
 */
export function val (value) {
    if (typeof value === 'function') {
        return value();
    }
    return value;
}

/**
 * Congela el valor de la funcion dada, o simplemente retorna el valor dado si no es una función.
 * @param {*} fn
 * @param {*} value
 * @returns {*}
 */
export function freeze (fn, value=undefined)
{
    if (value === undefined) {
        if (fn instanceof Function)
            fn = fn.clone().freeze();
        return fn;
    }

    if (value instanceof Function)
        value = value.clone().freeze();

    fn = fn.clone();
    fn.frozen = val(value);
    return fn;
}

/**
 * Retorna una funcion que retorna el elemento del arreglo en el indice dado.
 * @param {number} index
 * @param {array|function} array
 * @returns {function}
 */
export function atIndex (index, array) {
    let fn = () => val(fn.frozen ?? array)[index];
    fn.frozen = null;
    fn.clone = () => atIndex(index, array);
    fn.freeze = () => freeze(fn, array);
    return fn;
}

/**
 * Retorna una funcion que retorna el valor de la propiedad del objeto dado.
 * @param {string} key
 * @param {object|function} obj
 * @returns {function}
 */
export function atKey (key, obj) {
    let fn = () => val(fn.frozen ?? obj)[key];
    fn.frozen = null;
    fn.clone = () => atKey(key, obj);
    fn.freeze = () => freeze(fn, obj);
    return fn;
}

/**
 * Retorna una funcion que retorna la suma de los valores dados.
 * @param {number} deltaValue
 * @param {number|function} value
 * @returns {number}
 */
export function delta (deltaValue, value) {
    let fn = () => val(fn.frozen ?? value) + deltaValue;
    fn.frozen = null;
    fn.clone = () => delta(deltaValue, value);
    fn.freeze = () => delta(deltaValue, freeze(value));
    return fn;
}

/**
 * Retorna una function que retorna el ultimo elemento del arreglo.
 * @param {array|function} values
 * @returns {*}
 */
export function last (values) {
    let fn = () => val(fn.frozen ?? values).at(-1);
    fn.frozen = null;
    fn.clone = () => last(values);
    fn.freeze = () => freeze(fn, values);
    return fn;
}

/**
 * Retorna una function que retorna el primer elemento del arreglo.
 * @param {array} values
 * @returns {*}
 */
export function first (values) {
    let fn = () => val(fn.frozen ?? values).at(0);
    fn.frozen = null;
    fn.clone = () => first(values);
    fn.freeze = () => freeze(fn, values);
    return fn;
}
