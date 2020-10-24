import React, {Component} from 'react';
import '../style/profile.css';
import gerencia from '../images/gerencia.png';
import area from '../images/area.png';
import aspiracion from '../images/aspiracion.png';
import movilidad from '../images/movilidad.png';

class Profile extends Component {
    constructor() {
        super();
        this.state = { 
            usuarios: [] 
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/brayanlp')
        .then(response => response.json())
        .then(usuarioJson => this.setState({usuarios: usuarioJson}))
            
    }

    render(){
        const user = this.state.usuarios;
        console.log(user.length)
            return(
                <div className="content">
                    <div className="container user">
                        <div className="vector">
                            <img className="profile-img" src={user.avatar_url}/>
                <p className="name gray">{user.name}</p>
                        </div>
                        <div className="area">
                            <div>
                                <p className="orange"><img src={gerencia}/>GERENCIA</p>
                                <p className="gray">Tecnología</p>
                            </div>
                            <div>
                                <p className="orange"><img src={area}/>ÁREA</p>
                                <p className="gray">Tecnología</p>
                            </div>
                        </div>
                        <div className="position">
                            <p className="position-name gray">{user.bio}</p>
                            <p className="score gray">Nota de talento: <a className="orange">A</a></p>
                        </div>
                        <div className="aspirations">
                            <img src=""/>
                            <p className="orange"><img src={aspiracion}/>Aspiraciones Profesionales</p>
                            <p className="gray">Jefe de Marketing</p>
                        </div>
                        <div className="mobility">
                            <p className="orange"><img src={movilidad}/>Movilidad</p>
                            <label className="gray"><input name="opcion" type="checkbox"></input>Si</label>
                            <label className="gray"><input name="opcion" type="checkbox"></input>No</label>
                        </div>
                    </div>
                    <div className="container description">
                        <h3 className="orange title">Descripción del puesto</h3>
                        <p className="subtitle gray">Front End Developer</p>
                        <p className="job-description gray">Analiza las oportunidades en el mercado para los diferentes segmentos 
de negocio, diseñando productos innovadores para cada uno de
los canales de distribución de la organización.
                        </p>
                    </div>
                    <div className="container filter">
                        <p className="gray filter-text">Filtrar por:</p>
                        <select name="Año" className="gray año">
                            <option selected="true" disabled="disabled">Año</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                        </select>
                        <select name="Mes" className="gray mes">
                        <option selected="true" disabled="disabled">Mes</option>
                            <option>Enero</option>
                            <option>Febrero</option>
                            <option>Marzo</option>
                            <option>Abril</option>
                            <option>Mayo</option>
                            <option>Junio</option>
                            <option>Julio</option>
                            <option>Agosto</option>
                            <option>Septiembre</option>
                            <option>Octubre</option>
                            <option>Noviembre</option>
                            <option>Diciembre</option>
                        </select>
                    </div>
                </div>
            )
    }
}

export default Profile;