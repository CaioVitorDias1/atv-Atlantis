import Inputs from "../functions/inputs"
import Menu from "../interfaces/menu"

export default abstract class Processo{
    protected opcao!: number
    protected menu!: Menu
    protected input = new Inputs()
    protected processo!: Processo
    protected execucao!: boolean

    public get getExecucao(){
        return this.execucao
    }

    abstract processar(): void
}