import Menu from "../../interfaces/menu";

export default class MenuCadastroCliente implements Menu{
    
    
    mostrar(): void {
        // console.clear()
        // console.log(`****************************`)
        // console.log(`| Qual o tipo do cliente para cadastro? `)
        // console.log(`----------------------`)
        // console.log(`| 1 - Titular`)
        // console.log(`| 2 - Dependente`)
        // console.log(`----------------------`)
        console.clear()
        console.log("****************************")
        console.log("Informe as informações do cliente: ")
        console.log("---------------------------------")
        console.log("nome: ")
        console.log("data de cadastro: ")
        console.log("data de nascimento: ")
        console.log()
        console.log()
        console.log()

    }

}