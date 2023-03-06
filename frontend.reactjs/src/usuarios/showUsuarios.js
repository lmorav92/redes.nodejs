import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import variables from "../utils/variables";

const URL  =  variables.URI + 'usuarios/';


const CompShowUsuarios = () =>{
       const [usuarios,setUsuarios]  = React.useState([]);

       useEffect(()=>{
        getUsuarios();
       },[])

const getUsuarios = async () => {
     const res = await axios.get(URL)
     setUsuarios(res.data);
}
const deleteUsuario = async (id) => {
   await axios.delete(`${URL}${id}`)
   getUsuarios();
}

 return(
        <div className="container">
            <div className="row">
                 <div className="col">
                      <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Nombre de Usuario</th>
                                <th>Usuario</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Acciones</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            { usuarios.map((usuario) => {
                                return(
                                    <tr key={usuario.id}>
                                    <td>{usuario.NOMBRE_USUARIO}</td>
                                    <td>{usuario.USUARIO}</td>
                                    <td>{usuario.EMAIL}</td>
                                    <td>{usuario.TB_NROL_ID}</td>
                                    <td>
                                        <Link to={`/edit/${usuario.id}`} className='btn btn-info'>Editar</Link>
                                        <button className="btn btn-danger" onClick={ ()=> deleteUsuario(usuario.id)}>Eliminar</button>
                                    </td>
                                </tr>
                                )
                                
                            })}
                        </tbody>
                      </table>  
                 </div>
            </div>
        </div>
 );

}

export default CompShowUsuarios;