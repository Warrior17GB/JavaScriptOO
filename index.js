import {Cliente} from "./Cliente.js"; // import = Para importar uma classe de um outro arquivo, essa classe precisa ser exportada para poder ser importada;
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Gabriel", 12332112300); // Instanciando um novo objeto de uma classe;

const cliente2 = new Cliente("Michele", 32112332100);
console.log(cliente2.cpf)

const contaCorrenteGabriel = new ContaCorrente(cliente1, 1001);
contaCorrenteGabriel.depositar(1000);// Utilizando um dos métodos da classe;

const conta2 = new ContaCorrente(cliente2, 1001);

contaCorrenteGabriel.transferir(200, conta2);

console.log(contaCorrenteGabriel);
console.log(ContaCorrente.numeroContas);