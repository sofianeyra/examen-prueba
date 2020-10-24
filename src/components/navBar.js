import React, {Component} from 'react';
import '../style/navBar.css';
import logo from '../images/logo.svg';
import help from '../images/help-icon.png';
import logOut from '../images/log-out.png';

class NavBar extends Component {
    render() {
        return(
            <div className="navigation">
                <ul>
                    <li><a href="/"><img className="logo"src={logo}/></a></li>
                    <li><a href="/">Roles y Responsabilidades</a></li>
                    <li><a href="/">Indicadores y Metas</a></li>
                    <li><a href="/">Ver Feedbacks</a></li>
                    <li><a href="/">Dar Feedback</a></li>
                    <li><a href="/">Plan de Desarrollo</a></li>
                    <li><a href="/">Tutoriales</a></li>
                    <li><a href="/"><img src=""/></a></li>
                    <li><a>Nombre</a></li>
                    <li><img src={help}/></li>
                    <li><img src={logOut}/></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;