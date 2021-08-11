// Array

const animalsName = [
   'Tiger',
   'Dog',
   'Lion'
]
// podemos colocar varios tipos de dados dentro do array,
// mas é recomendável seguir um padrão de estrutura para guardar esses dados
// usar um tipo de dado para o array todo.

const Animals = [
   { name: 'Tiger', age: 2, isWild: true },
   { name: 'Lion', age: 4, isWild: true },
   { name: 'Cat', age: 1.5, isWild: false}
]
console.log(animalsName)
// Os itens do array podem ser acessados pelo seu índex (começa no 0)... array[index]
console.log(Animals[0])
// Acessar uma propriedade de um objeto que está dentro de um array é igual à acessar uma propriedade de um objeto literal, só devemos antes encontrar o índice do objeto dentro do array.
console.log(Animals[2].isWild) // false