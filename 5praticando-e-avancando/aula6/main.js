// 1-Declare uma variável de nome weight.

let weight;

// 2-Que tipo de dado é a variável acima?
// Undefined ou any (qualquer coisa), pois não atribuimos nenhum valor para ela.
// console.log(typeof weight)

/* 3-Declare uma variável e atribua valores para cada um dos dados:
      * name: string;
      * age: number (integer);
      * stars: number (float);
      * isSubscribed: boolean; 
*/

let name = "Moisés";
let age = 17;
let stars = 5.8;
let isSubscribed = true;

/* 4-A variável student é de que tipo de dado?
   4.1-Atribua a ela as mesmas propriedades e valores do exercício 3
   4.2 Mostre no console.log a seguinte mensagem:
      "<name> de idade <age> pesa <weight> kg"
   ATENÇÃO substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/

let student = {
   name: "Moisés",
   age: 17,
   stars: 5.8,
   isSubscribed: true,
   weight: 52
}
// Tipo objeto

// student.name = "Moisés";
// student.age = 17;
// student.stars = 5.8;
// student.isSubscribed = true;

// console.log(`${student.name} de idade ${student.age}, pesa ${student.weight} Kg.`)

/* 
   5-Declare uma variável do tipo Array, de nome students, e atribua a ela nenhum valor,
   ou seja, somente o array vazio.
*/

let students = []

/* 
   6-Reatribua valor para a variável acima, colocando dentro dela
   o objeto student da questão 4. (Não copiar e colar o objeto, 
   mas usar o objeto criado e inserir ele no array
*/

students = [student]
// console.log(students)

/* 
   7-Coloque no console o valor da posiçã zero do array acima
*/ 

// console.log('Estudante na posição 0:', students[0])

/* 
   8-Crie um novo estudante e coloque na posição 1 do Array students;
*/
let newStudent = {
   name: "Douglas",
   age: 19,
   stars: 5.0,
   isSubscribed: false,
   weight: 75.2,
}

students[1] = newStudent;
// console.log(students)

/* 
   9-Sem rodar o código abaixo responda: Qual é a
   resposta do código abaixo? Após sua resposta rode o 
   código e veja se você acertou
*/

// console.log(a);
// var a = 1;

/* 
   A resposta será undefined, pois a variável var
   sofre elevação, e é declarada no topo do código
   mas sem atribuição.
*/

/* 
   +10-Trocando o var para let, o que vai acontecer?
*/

console.log(a)
let a = 1;

/* 
   Vai dar um erro de referência, no qual a variável não foi declarada,
   ele não consegue acessar a variável antes dela ser declarada
   o let não sofre eleveção.
*/