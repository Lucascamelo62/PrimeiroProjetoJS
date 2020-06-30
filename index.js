import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Lucas Camelo";
cliente1.cpf = "06303882374";

const contaCorrente1 = new ContaCorrente();

contaCorrente1.agencia = 631;
contaCorrente1.saldo = 0;
contaCorrente1.depositar(500);
const valorSaque = contaCorrente1.sacar(50);

console.log(valorSaque);

console.log(contaCorrente1);

console.log(cliente1);


