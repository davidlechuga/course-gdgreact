import React, {Component, Fragment} from 'react'
import logoconference from '../Images/FES-acatlan.jpg'
import '../Styles/Badge.css'

class Badge extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <img className="logoconference" src={logoconference} alt="Logo de la Conferencia"  />
                </div>

                <div>
                    <img src="" alt=""   />
                    <h1> Lechuga Huerta David</h1>
                </div>

                <div>
                    <p>Full-Stack Developer</p>
                    <p> davidlechuga</p>
                </div>

                <div>
                    <p>footer</p>
                </div>
           </Fragment>
        )
    }
}

export default Badge