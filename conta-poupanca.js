class ContaBancaria {
    #saldo;
    #historico;

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
        this.#historico = [];
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("Valor Inválido");
            return this;
        }
        this.#historico.push(`Depósito: ${valor}`);
        this.#saldo += valor;
        return this;
    }

    sacar(valor) {
        if (valor <= 0 || valor > this.#saldo) {
            console.log("Valor Inválido ou Saldo Insuficiente");
            return this;
        }
        this.#historico.push(`Saque: ${valor}`);
        this.#saldo -= valor;
        return this;
    }

    getSaldo() {
        return this.#saldo;
    }

    getExtrato() {
        return [...this.#historico];
    }
}

class ContaPoupanca extends ContaBancaria {
    #taxaJuros;

    constructor(saldoInicial = 0, taxaJuros = 0.01) {
        super(saldoInicial);
        this.#taxaJuros = taxaJuros;
    }

    aplicarRendimento() {
        const rendimento = this.getSaldo() * this.#taxaJuros;
        this.depositar(rendimento);
        console.log(`Rendimento aplicado: ${rendimento}`);
        return this;
    }
}

const poupanca = new ContaPoupanca(500, 0.05);
poupanca.depositar(200).aplicarRendimento();

console.log("Saldo final poupança:", poupanca.getSaldo());
console.log("Extrato poupança:", poupanca.getExtrato());
