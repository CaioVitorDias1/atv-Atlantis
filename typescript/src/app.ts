import Inputs from "./functions/inputs";
import Cliente from "./models/cliente";
import Main from "./processes/main";
import Processo from "./processes/processo";
const input = new Inputs

// let cliente = new Cliente()
// cliente.nome = input.inputText("")
// cliente.dataCadastro = new Date(1840, 6, 23)
// cliente.dataNascimento = new Date(1825, 11, 2)
// console.log(cliente.nome)

//let processo: Processo
let emExecucao: boolean = true
console.log("Bem Vindo ao Atlantis")

while(emExecucao){
    let processo = new Main()
    processo.processar()
    emExecucao = processo.getExecucao
}