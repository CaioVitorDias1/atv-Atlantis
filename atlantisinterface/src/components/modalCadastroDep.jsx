import "../styles/modalCadastroDep.css"
import Menu from "./menu"

export default function ModalCadastroDep(){
    
    let entidade = "Dependente"
    
    return(
        <div>

            <Menu />
        <div className="principal">
            <h1>Bem vindo ao cadastro de Dependentes!</h1>
            <form className="formulario">
                <div className="elemento">
                    <label>Nome do cliente responsável</label>
                    <input type="text"></input>
                </div>
                <div className="elemento">
                    <button type="button" className="btn btn-primary">Escolher</button>
                </div> 
            </form>
            <form>
                <h2>Cadastro de {entidade}</h2>
                <div className="elemento">
                    <label>Nome do {entidade}</label>
                    <input type="text"></input>
                </div>
                <div className="elemento">
                    <label>Data de nascimento do {entidade}</label>
                    <input type="date"></input>
                </div>
                <div className="elemento">
                    <label>DDD do telefone</label>
                    <input type="text"></input>
                </div>
                <div className="elemento">
                    <label>Numero do telefone </label>
                    <input type="text"></input>
                </div>
                <div className="elemento">
                    <label>Numero do documento </label>
                    <input type="text"></input>
                </div>
                <div className="elemento">
                    <label>Tipo do documento </label>
                    <input type="text"></input>
                </div>
                <div className="elemento">
                    <label>Data de expedição</label>
                    <input type="date"></input>
                </div>

                <div className="botaozin">
                    <button type="button" className="btn btn-primary">Cadastrar</button>
                </div>
            </form>
            
        </div>

        </div>
    )
}