// function  criarContador() {
//     let contador = 0;

//     return function(){
//         contador++;
//         console.log(contador);
//     }
// }

// const contar = criarContador()

// contar()
// contar()
// contar()
// contar()

// const c1 = criarContador()
// const c2 = criarContador()

// c1()
// c1()
// c2()
// c1()

// const a = criarContador()
// const b = a

// a()
// a()
// b()


// Temporal Dead Zone (TDZ) - Zona morta temporária
// Variáveis declaradas com let e const estão em uma "zona morta" desde o início do bloco até a linha onde são declaradas. Acessar a variável antes de sua declaração resulta em um erro de referência.
// A funcao  cria um escopo de bloco, e a variável 'nome' está em TDZ até ser declarada.
//let nome = "Alexandre";

//function teste() {
   //Temporarily dead zone (TDZ) - A variável 'nome' está em TDZ até ser declarada

  //  console.log(nome); // ReferenceError: Cannot access 'nome' before initialization

    //let nome = "João";

    // TDZ fim
//}

// teste()


// Hoisting - Elevação de variáveis e funções
// Variáveis declaradas com var são içadas (hoisted) para o topo do escopo, mas não são inicializadas até a linha de código onde são definidas.
// elas começam com valor undefined até serem inicializadas.
// A função 'teste2' demonstra o hoisting de variáveis declaradas com var. A variável 'x' é içada para o topo da função, mas não é inicializada até a linha onde é definida.
// let x = 5;

// function teste2() {
//     // Hoisting - A variável 'x' é içada para o topo da função, mas não é inicializada até a linha onde é definida.
//     console.log(x)

//     var x = 10;
// }

// teste2()


// let y = 100;

// function criar() {
//   let y = 10;

//   return function() {
//     console.log(y);
//   };
// }

// const fn = criar();

// y = 200;

// fn();

// let x = 100;

// function criar() {
//     let x = 10;

//     return {
//         incrementar() {
//             x++;
//         },
//         decrementar() {
//             x--;
//         }, 
//         mostrar() {
//             console.log(x);
//         }
//     }
// }

// x = 200;

// const contador = criar();

// contador.incrementar();
// contador.incrementar();
// contador.incrementar();
// contador.incrementar();
// contador.mostrar(); // 14
// contador.decrementar();
// contador.mostrar(); // 13

// for (let i = 0; i < 3; i++) {

//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }

/**
 * Method chaining (encadeamento de métodos) é uma técnica de programação que permite chamar múltiplos métodos em um único objeto, encadeando-os em uma única linha de código. Cada método retorna o próprio objeto, permitindo que os métodos sejam chamados em sequência.
 * 
 * No exemplo abaixo, a função criarContador() retorna um objeto com dois métodos: add() e get(). O método add() incrementa o contador e retorna o próprio objeto, permitindo que o método get() seja chamado em seguida para obter o valor atual do contador.
 * 
 * A técnica de method chaining é útil para tornar o código mais conciso e legível, especialmente quando se trabalha com objetos que possuem múltiplos métodos que podem ser chamados em sequência.
 */

// function criarContador() {
//     let contador = 0;

//     return {
//         add(){
//             contador++;
//             return this
//         },
//         get(){
//             return contador
//         } 
//     }
// }

// const contar = criarContador()

// contar.add().add().add().add()
// console.log(contar.get()) // 4

// console.log(contar.add().add().get()) // 6

// const g = contar.get;

// console.log(g()) // 6


function criar() {
  let valor = 0;

  return {
    valor: 100,

    get() {
      return this.valor;
    }
  };
}

const c1 = criar();

console.log(c1.get());
const obter = c1.get;

console.log(obter());

const pessoa = {
  nome: "Alexandre",

  mostrar() {
    console.log(this.nome);
  }
};

pessoa.mostrar();
