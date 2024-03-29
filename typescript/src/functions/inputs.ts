import promptSync from "prompt-sync";

export default class Inputs {
    public inputNumber(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(`${mensagem}: `)
        let numero = new Number(valor)
        return numero.valueOf()
    }
    public inputText(mensagem: string): string {
        let prompt = promptSync();
        let texto = prompt(`${mensagem}: `)
        return texto
    }
    public inputDate(mensagem: string): Date {
        let prompt = promptSync();
        let texto = prompt(`${mensagem}, no padrão dd/MM/yyyy: `)
        let partes = texto.split('/')
        let ano = new Number(partes[2])
        let mes = new Number(partes[1])
        let dia = new Number(partes[0])
        let data = new Date(ano.valueOf(), mes.valueOf() - 1, dia.valueOf())
        return data
    }
}