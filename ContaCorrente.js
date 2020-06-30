export class ContaCorrente{
    agencia;
    saldo;

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
}