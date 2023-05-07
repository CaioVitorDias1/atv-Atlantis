import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente{
    public nome?: string
    public dataCadastro?: Date
    public dataNascimento?: Date
    public telefone?: Telefone[] = []
    public endereco?: Endereco
    public documento?: Documento
    public dependentes?: Cliente[] = []
    public titular?: Cliente
      
    // constructor(nome:string){
    //     this.nome = nome;
    // }
}