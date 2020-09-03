// Todo arquivo que iniciar com letra maiúscula, se refere a um arquivo de class;

export class Cliente{ // export = Exportar essa plasse para outros arquivos poderem usar;
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){ // Construtor de classe;
        this.nome = nome;
        this._cpf = cpf;
    }
}