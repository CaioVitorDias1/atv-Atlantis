import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css"

class Menu extends Component{
    render(){

        return(
            <div className="divprincipal">
                <nav>
                    <button className="botaoheader"> <Link to="/" style={{ textDecoration: 'none' }}>Home</Link> </button>
                    
                </nav>
            </div>
        )
    }
}

export default Menu