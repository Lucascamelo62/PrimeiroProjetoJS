import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Lucas Camelo";
cliente1.cpf = "06303882374";

cliente2.nome = "Napoleao";
cliente2.cpf = "90987634625";

const contaCorrente1 = new ContaCorrente();
const contaCorrente2 = new ContaCorrente();

contaCorrente1.agencia = 631;
contaCorrente1.depositar(500);
contaCorrente1.cliente = cliente1;

contaCorrente2.agencia = 654;
contaCorrente2.depositar(200);
contaCorrente2.cliente = cliente2;
contaCorrente2.transferir(1000, contaCorrente1);

console.log(contaCorrente1, contaCorrente2);



