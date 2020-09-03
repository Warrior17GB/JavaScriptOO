// Todo arquivo que iniciar com letra maiúscula, se refere a um arquivo de class;
import { Cliente } from "./Cliente.js";

export class ContaCorrente{ // Estrutura para definir uma classe e seus argumentos e métodos;
    static numeroContas = 0;
    agencia;
    _cliente;
    _saldo = 0; // Argumentos com underline antes do nome é para informar que o atributo deve ser tratado como privado, só pode ser manipulado dentro dessa classe;


    set cliente(novoValor){ // Bloco de comando para permitir que a propriedade "_cliente" receba apenas instancias da classe "Cliente". Obs. Isso não é um método, é um acessor;
        if(novoValor instanceof Cliente){ // Se novoValor for uma instancia da classe "Cliente";
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this.saldo;
    }


    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroContas++;
    }


    sacar(valor){ // Estrutura para difinir um método/função em uma classe;
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        
        this._saldo += valor;
    }

    transferir(valor, contaDestino){
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
    } 
}