export default function ModalCadastroDep(){
    
    let entidade = "Cliente"
    
    return(
        <div>
            <h1>Bem vindo ao cadastro de Dependentes!</h1>
            <form>
                <div>
                    <label>Nome do cliente responsável</label>
                    <input type="text"></input>
                </div>
                <div>
                    <button type="button" className="btn btn-primary">Escolher</button>
                </div> 
            </form>
            <form>
                <h2>Cadastro de {entidade}</h2>
                <div>
                    <label>Nome do {entidade}</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Data de nascimento do {entidade}</label>
                    <input type="date"></input>
                </div>
                <div>
                    <label>DDD do telefone</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Numero do telefone </label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Numero do documento </label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Tipo do documento </label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Data de expedição</label>
                    <input type="date"></input>
                </div>

                <div>
                    <button type="button" className="btn btn-primary">Cadastrar</button>
                </div>
            </form>
            
        </div>
    )
}