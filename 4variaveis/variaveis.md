# Conhecendo as variávies

*"São caixinhas na estante onde guardamos nossos objetos"*

- Nomes simbólicos que recebem algum valor;
- Encontram um espaço vazio na memória do computador.
- Atalhos de códigos
- Identificadores
- Existem 3 *keywords* para declarar uma variável
    - var
    - let
    - const

```jsx
var piso = "Madeira";
console.log(piso);
// Madeira

let clima = "Frio"
clima = "Quente"
console.log(clima)
// Quente - valor de clima foi redeclarado para "Quente"

const idade = 17;
idade = 18
// TypeError: Assignment to constant variable - Não é possivel redeclarar uma cosntante
// pois o seu valor é constante
```

# Tipos Dinâmicos

O Java Script é uma linguagem fracamente tipada e de tipagem dinâmica.

*Linguagens com tipagem forte e estática precisam definir o tipo da variavel no momento da declaração*

```jsx
// Linguagem com fortemente tipada
const nome: string = "Moisés"
```

- No JS, variáveis não precisam ter um tipo previamente definido
- Quem determina o tipo da variável é o seu conteúdo
- Podemos mudar o conteúdo da variável (se não for uma const)
- Usamos  typeof  para descobrir o tipo de alguma coisa

```jsx
let altura = 1.75;
console.log(typeof altura) // number

altura = "Um metro e setenta e cinco"
console.log(typeof altura) // string
```

No JS moderno utilizamos *let* e *const*, e não mais *var,* por questões de boas práticas.

# Scope

- Escopo determina a visibilidade de uma variável no JS

## Block statement

Declaração de um bloco de código

```jsx
{ // começo do bloco
	// códigos ...
} // fim do bloco
```

O bloco criará um novo escopo, chamado de Escopo de Bloco - *Block Scope.*

```jsx
{
	let number = 10;
	console.log(number)
	// 10
}
```

## Var

Var é uma declaração de variável global (e também local), e que funciona fora de um escopo de bloco.

- Global: Tudo o que está solto no arquivo, ou na tag script (escopo invisível).
- Local: Tudo dentro de um bloco (escopo visível {}).

Ou seja, mesmo se declarada dentro de um bloco, o JS consegue acessar ela.

- Hoisting

    ```jsx
    console.log(name)
    {
    	var name = "Moisés"
    }
    // undefined
    ```

    **Por debaixo dos panos** isso acontece por que a *var name* sofre o efeito de elevação quando executado, que declara a variável no topo do código, mas não atribui nenhum valor, quando entra no bloco, o JS redeclara a variável com o valor *"Moisés"*

    ```jsx
    var name
    console.log(name)
    {
    	name = "Moisés"
    }
    ```

    ## Let e Const

    Let e Const são variáveis do tipo local, só são visíveis apenas no escopo onde foram declaradas.

    ```jsx
    // variável let criada no escopo global
    let terreno = {
    	comprimento: 40;
    	largura: 30;
    }
    console.log(terreno)
    // { comprimento: 40, largura: 30 }
    ```

    ```jsx
    // let criada no escopo local
    {
    	let serie = "3ºA"
    }
    console.log(serie)
    // Uncaught ReferenceError: serie is not defined
    ```

    ```jsx
    // Redeclaração de uma let dentro de um escopo local - Não funciona com **const**
    let temCNH = false;
    console.log(temCNH) // Aqui o valor é falso
    {
    	temCNH = true; // Já aqui ele procurou no arquivo uma variável já existente e reatribuiu seu valor para true
    }
    console.log(temCNH) // true
    ```

    - Abaixo temos duas variáveis com mesmo nome, mas em escopos diferentes.

    ```jsx
    // Funciona da mesma forma com const pois são duas variáveis diferentes e não uma redeclaração como acima.
    let x = 10;
    console.log(x); // 10
    {
    	let x = 15;
    	console.log(x); // 15
    }

    console.log(x); // 10 - por que o JS n visualiza o x dentro do escopo;
    ```

    A const apresenta o mesmo comportamento de escopo que a let, a diferença é que ela não pode ser reatribuída, seu valor não pode ser alterado.

# Nomeando Variáveis

- O JS é case-sensitive (Sensível ao caso)
- Letras MAIÚSCULAS e minúsculas, acentos diferenciam variáveis.

```jsx
let Ônibus = "Ônibus" // é uma variável
let Onibus = "Onibus" // é outra variável
let ônibus = "ônibus" // outra variável
let onibus = "onibus" // outra variável também
```

- JS aceita cadeia de caracteres unicode

    *"Unicode é um padrão que permite aos computadores representar e manipular, de forma consistente, texto de qualquer sistema de escrita existente"* Wikipedia

## O que é permitido?

- [ ]  Iniciar com esses caracteres especiais: _ $

```jsx
let _notebook = "macbook air 2015"
let $altura = 1.80
```

- [ ]  Iniciar com letras
- [ ]  Colocar acentos
- [ ]  Letras maiúsculas e minúsculas fazem diferença

## O que *NÃO* é permitido?

- [ ]  Iniciar com número
- [ ]  Colocar espaços vazios no nome

```jsx
let 14test = "14test" // Não funciona
let meu filme favorito = "Batman" // Não funciona
```

## Ideal

- Criar nomes que fazem sentido
- Que expliquem o que a variável é ou faz
- Usar camelCase
- ou sneak_case
- Escrever em inglês