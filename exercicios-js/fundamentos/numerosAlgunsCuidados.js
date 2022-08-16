/**
 * JS
 *  - Valor 0 ou -0 -> +Infinity/-Infinity
 *  - NaN -> Not A Number
*/

console.log(7 / 0) // Infinity
console.log("10" / 2) // 5 -> em JS da certo -> ele verifica / NaN -> se ele não for número
console.log('3' + 2) // String tem preferencia -> concatena -> 32
console.log("Show!" * 2) // NaN
console.log(0.1 + 0.7) // Gera algumas imprecisão -> Double-precision floating-point format (+ rápida)

// onsole.log(10.toString()) // SyntaxError: Invalid or unexpected token

console.log((10.345).toFixed(2))
