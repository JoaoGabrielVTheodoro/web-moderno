/**
 * String
 *  - Cadeia de Caracteres -> elementos -> posição de 0 até o tamanho total
 *  da String
 *  - Delimitada por "", '' ou ``
*/

const escola = 'Cod3r'

console.log(escola.charAt(4)) // r -> Pega um elemento de acordo com a posição
console.log(escola.charAt(5)) // Vazio -> JS não gera erro como outras
console.log(escola.charCodeAt(3)) // 51 -> valor na tabela ASC -> unicode
console.log(escola.indexOf('3')) // Retornar o indice relacionado ao elemento

console.log(escola.substring(1)) // od3r -> indica o indice de dado elemento que vai iniciar a string ou terminar
console.log(escola.substring(0, 3)) // Cod -> do 0 me de 3 caracteres -> sem incluir o indice final

console.log('Escola '.concat(escola).concat('!')) // Juntar cadeia de caracteres
console.log('Escola '+ escola + '!')
console.log('3' + 2) // String ganha

console.log(escola.replace(3, 'e')) // Substituir 3 por e

console.log('Ana,Maria,Pedro'.split(",")) // separar -> gerar array
