import "../styles/modalCadastro.css"
import axios from "axios"
import Menu from "./menu"
import { useState } from "react";

export default function ModalCadastro(){
    
    const [nome, setNome] = useState("")
    const [dataNascimento, setdataNascimento] = useState(Date)
    const [dddTelefone, setdddTelefone] = useState("")
    const [nTelefone, setnTelefone] = useState("")
    const [nDocumento, setnDocumento] = useState("")
    const [tipoDocumento, settipoDocumento] = useState("")
    const [dataExpedicao, setdataExpedicao] = useState(Date)


    let objetoCliente = {
        nome: nome,
        dataNascimento: dataNascimento,
        dddTelefone: dddTelefone,
        nTelefone: nTelefone,
        nDocumento: nDocumento,
        tipoDocumento: tipoDocumento,
        dataExpedicao: dataExpedicao
    }

    let entidade = "Cliente"
    function handleSubmit(e){
        e.preventDefault()

        axios.post(axios.post("http://localhost:9000/api/cliente/create" , objetoCliente)
        .then( res => {
            let resposta = res.data
            console.log(resposta)
        }))
        
    }
    return(
        <div>
            <Menu />
        <div className="principal">
            
            <form className="form">
                <h2>Cadastro de {entidade}</h2>
                <div className="elemento">
                    <label>Nome do {entidade}</label>
                    <input type="text" onChange={(e) => setNome(e.target.value)}></input>
                </div>
                <div className="elemento">
                    <label>Data de nascimento do {entidade}</label>
                    <input type="date" onChange={(e) => setdataNascimento(e.target.value)}></input>
                </div>
                <div className="elemento">
                    <label>DDD do telefone</label>
                    <input type="text" onChange={(e) => setdddTelefone(e.target.value)}></input>
                </div>
                <div className="elemento">
                    <label>Numero do telefone </label>
                    <input type="text" onChange={(e) => setnTelefone(e.target.value)}></input>
                </div>
                <div className="elemento">
                    <label>Numero do documento </label>
                    <input type="text" onChange={(e) => setnDocumento(e.target.value)}></input>
                </div>
                <div className="elemento">
                    <label>Tipo do documento </label>
                    <input type="text" onChange={(e) => settipoDocumento(e.target.value)}></input>
                </div>
                <div className="elemento">
                    <label>Data de expedição</label>
                    <input type="date" onChange={(e) => setdataExpedicao(e.target.value)}></input>
                </div>
                <div>
                <button type="button" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Cadastrar</button>
                </div>
            </form>
        </div>

    </div>
    )
}