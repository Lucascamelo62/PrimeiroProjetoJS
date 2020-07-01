export class ContaCorrente{
    agencia;
    saldo = 0;
    cliente;
    
    sacar(valorSaque){
        if(this.saldo >= valorSaque){
            this.saldo = this.saldo - valorSaque;
            return valorSaque;
        }
    }
    depositar(valorDeposito){
        if(valorDeposito > 0){
            this.saldo = this.saldo + valorDeposito;
        }
    }
    transferir(valorTransferir, contaDestino){
        if(valorTransferir <= this.saldo){
            const valorSaque = this.sacar(valorTransferir);
            contaDestino.depositar(valorSaque);
        }
    }
}