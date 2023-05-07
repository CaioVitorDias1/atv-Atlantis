import Inputs from "./functions/inputs";
import Cliente from "./models/cliente";
const input = new Inputs

let cliente = new Cliente()
cliente.nome = input.inputText("")
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)
console.log(cliente.nome)