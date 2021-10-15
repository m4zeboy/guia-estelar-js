// RETORNANDO VALORES NA FUNÇÃO

function soma(value1, value2) {
   let total = value1 + value2;
   return total;
}

/* 
   [] Quando a função chega na linha return ela para
   e retorna algum valor.

   [] Se não existir a linha com o return, a função irá
   retornar o valor 'undefined'.

*/


let number1 = 87;
let number2= 74;

console.log(`O número1 é: ${number1}.`)
console.log(`O número2 é: ${number2}.`)
console.log(`A soma deles resulta em: ${soma(number1, number2)}`)