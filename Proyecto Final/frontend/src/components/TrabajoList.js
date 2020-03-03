import React, { Component } from "react";
import { Link } from "react-router-dom";
import  SERVICE_TRABAJO from '../services/trabajo'

class TrabajoList extends Component {
    state = {
        trabajos:[]
    }

    async getTrabajoInfo(){
        const { trabajos } =  await SERVICE_TRABAJO.getAllTrabajos()
        this.setState({
            trabajos
        })
    }

    async componentDidMount(){
        this.getTrabajoInfo()
    }

    // async SERVICE_TRABAJO.DELETE (projectId) {
    //     await SERVICE_TRABAJO(projectId);
    //     this.getProjectsInfo();
    //   }

    render(){
        return(
            <>
                {this.state.trabajos.map((trabajo, idx) =>(
                    <li key={idx}>
                        <Link to={`/trabajos/${trabajo._id}`} >Nombre del trabajo: {trabajo.title}   </Link>
                        <p> Descripcion del trabajo:  {trabajo.description} </p>  

                    </li>


                ) )}
            </>
        )
    }


}

export default TrabajoList