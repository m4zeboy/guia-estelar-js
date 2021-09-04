/*
 Argumentos e parâmetros

- Expression function or function anonymous
- passar valores para dentro da funcão com a finalidade
  de fazer alguma coisa com eles.
- Esses valores só são acessíveis dentro do escopo
  da função.
*/

const soma = function(value1, value2) {

   /*
   imaginemos que por baixo dos panos 
   acontece isso:
   let value1 = 12
   let value2 = 7
   */
   console.log(value1 + value2)


}

soma(12, 7)