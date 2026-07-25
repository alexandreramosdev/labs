function criarConta() {
    let saldo = 0;
    let historico = [];

    return {
        depositar(valor) {
            if(valor <= 0 ) {

                console.log("Valor Invalido")
                 return this
            }
            
            historico.push(`Deposito: ${valor}`)
            saldo += valor;
            return this
        },

        sacar(valor) {
            if (valor <= 0) {

                console.log("Valor Invalido")
                return this 
            }

            if (valor > saldo) {

                console.log("Saldo Insuficiente")
                return this 
            }

            historico.push(`Saque: ${valor}`)
            saldo -= valor
            return this

        },

        extrato() {
            return [...historico]; // Retorna uma cópia do array
        },

        saldo() {
            return saldo 
        }

    }
}

const conta1= criarConta()
const conta2= criarConta()
const conta3= criarConta()
const conta4= criarConta()


conta1.depositar(100).sacar(55).depositar(10).sacar(5).sacar(10)

conta2.sacar(-10)

conta3.depositar(100).sacar(110)

conta4.depositar(-10)


console.log("c1", conta1.extrato())
console.log("c1", conta1.saldo())
console.log("c2", conta2.saldo())
console.log("c3", conta3.saldo())
console.log("c4", conta4.saldo())

// console.log(conta1.historico);

// console.log(conta1.saldo);

/**
 * 
 *   Para evitar que o extrato seja modificado externamente, podemos retornar uma cópia do array em vez de retornar o próprio array. Isso pode ser feito usando o método slice
 * () ou o operador spread (...). Aqui está a modificação na função extrato():
 *  trocar isso: 
 * 
 *  extrato() {
            return historico
        },

 * para isso:

 *  extrato() {
            return [...historico]; // Retorna uma cópia do array
        },

    ou extrato() {
            return historico.slice(); // Retorna uma cópia do array
        }
 * 
 * 
*/



const extrato = conta1.extrato();

extrato.push("FRAUDE");

console.log(extrato);

console.log(conta1.extrato());