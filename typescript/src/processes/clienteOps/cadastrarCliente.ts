import Cliente from "../../models/cliente";
import Endereco from "../../models/endereco";
import Telefone from "../../models/telefone";
import Armazem from "../armazem";
import Processo from "../processo";

export default class CadastrarCliente extends Processo{
    
    
    processar(): void {
        console.log("Cadastrando cliente...")
        console.log("***************************")
        let nome = this.input.inputText("informe o nome do cliente: ")
        let dataCadastro = this.input.inputDate("informe a data de cadastro: ")
        let dataNascimento = this.input.inputDate("informe a data de nascimento: ")
        let telefoneDDD = this.input.inputText("informe o ddd: ")
        let telefoneNumero =  this.input.inputText("informe o numero de telefone: ")
        let enderecoRua = this.input.inputText("informe a rua : ")
        let enderecoBairro = this.input.inputText("informe o bairro: ")
        let enderecoCidade = this.input.inputText("informe a cidade: ")
        let enderecoEstado = this.input.inputText("informe o estado: ")
        let enderecoPais = this.input.inputText("informe o país: ")
        let enderecoCodigoPostal = this.input.inputText("informe o CP: ")
        //let documento

        let telefoneCliente = new Telefone()
        telefoneCliente.ddd = telefoneDDD
        telefoneCliente.numero = telefoneNumero
        let listaTelefones = []
        listaTelefones.push(telefoneCliente)

        let enderecoCliente = new Endereco()
        enderecoCliente.rua = enderecoRua
        enderecoCliente.bairro = enderecoBairro
        enderecoCliente.cidade = enderecoCidade
        enderecoCliente.estado = enderecoEstado
        enderecoCliente.pais = enderecoPais
        enderecoCliente.codigoPostal = enderecoCodigoPostal



        let cliente = new Cliente()
        cliente.nome = nome
        cliente.dataCadastro = dataCadastro
        cliente.dataNascimento = dataNascimento
        cliente.telefone = listaTelefones
        cliente.endereco = enderecoCliente

        let armazem = Armazem.InstanciaUnica
        armazem.getClientes.push(cliente)
    }

}