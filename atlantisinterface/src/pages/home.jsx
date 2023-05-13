import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import ModalCadastro from "../components/modalCadastro";
import "../styles/home.css"

export default function Home() {
    const navigate = useNavigate()

    function handle1(e){
        e.preventDefault()
        navigate("/cadastrarCliente")
    }
    function handle2(e){
        e.preventDefault()
        navigate("/cadastrarDependente")
    }
    function handle3(){

    }
    function handle4(){

    }
    return(
        <div>
            <Header />
            <div className="textos">
                <h1>
                    Bem Vindo ao Atlantis!
                </h1>
                <h2>
                    Escolha uma funcionalidade:
                </h2>
            </div>
            <div className="menuPrincipal d-flex flex-column justify-content-center align-items-center">
                <button type="button" className="btn btn-primary" onClick={(e) => handle1(e)}>Cadastrar Cliente</button>
                <button type="button" className="btn btn-primary" onClick={(e) => handle2(e)}>Cadastrar Dependentes</button>
                <button type="button" className="btn btn-primary">Listar Clientes</button>
                <button type="button" className="btn btn-primary">Excluir Cliente</button>
            </div>
        </div>
    )
}