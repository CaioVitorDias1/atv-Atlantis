export default function ModalCadastro(){
    
    let entidade = "Cliente"
    
    return(
        <div>
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
            </form>
        </div>
    )
}