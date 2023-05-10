import CadastrarCliente from "./clienteOps/cadastrarCliente";
import MenuCadastroCliente from "./menus/menuCadastroCliente";
import MenuPrincipal from "./menus/menuPrincipal";
import Processo from "./processo";

export default class Main extends Processo{
    constructor(){
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    
    
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.input.inputNumber("Escolha um opção: ")
        switch(this.opcao){
            case 1: 
                let clienteCadastro = new CadastrarCliente()
                //this.processo = MenuCadastroCliente 
                clienteCadastro.processar
                
            case 0:
                this.execucao = false
                console.log("operacao encerrada")
                break
            default:
                console.log("escolha uma opcao valida!")
        }
    }

}