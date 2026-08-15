# 📚 Aula: De Funções Fábrica para Classes ES6 e Protótipos

## 1. O Problema das Funções Fábrica (Factory Functions)
- **Como vimos:** `criarConta()` retorna um objeto novo a cada chamada.
- **O custo de memória:** Cada instância criada tem cópias próprias de *todos* os métodos (`depositar`, `sacar`, `extrato`). Se criarmos 10.000 contas, teremos 10.000 cópias da função `depositar` na memória.
- **Solução:** A herança baseada em protótipos e a sintaxe de `class`.

---

## 2. Introdução às Classes ES6 (`class`)
A palavra-chave `class` em JavaScript é apenas um *syntactic sugar* (açúcar sintático) por cima do sistema de protótipos existente.

### Exemplo Prático (Convertendo a Conta Bancária):
```javascript
class ContaBancaria {
    #saldo;       // Campo privado (recurso moderno do JS)
    #historico;   // Campo privado

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
        return this; // Permite Method Chaining!
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

// Uso:
const minhaConta = new ContaBancaria(100);
minhaConta.depositar(50).sacar(30);
console.log(minhaConta.getSaldo()); // 120
```

---

## 3. Conceitos Chave Abordados:
1. **O operador `new`:** O que ele faz por baixo dos panos (cria um objeto, vincula o protótipo, define o `this` e retorna o objeto).
2. **Campos Privados (`#`):** Como o JavaScript moderno (`#privado`) substitui o encapsulamento que antes fazíamos apenas com closures.
3. **Herança (`extends` e `super`):** Como criar uma `ContaPoupanca` ou `ContaCorrente` que herda os comportamentos da `ContaBancaria`.
