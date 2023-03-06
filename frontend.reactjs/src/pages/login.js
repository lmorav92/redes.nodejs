import React, {useState, useEffect} from 'react'
import axios from 'axios'
import variables from '../utils/variables';


const URL  =  variables.URI + 'usuarios/';

const Login = (props) => {

const [datos,setDatos] = useState({
        userName:'',
        password:''
      })

const loginIn = async () =>{
    console.log(datos);
  const res =  await axios.get(URL)
    return setDatos(res.message);
}   
const handleChange=e=>{
    const {name,value}  = e.target;
    setDatos({
       ...datos,
       [name]:value
    });         
}
useEffect(()=>{
    
  },[]);

return(
    <div className='container'>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-4 mt-2'>
                <b>Login</b>
                <form >
                    <div style={{border:'solid 1px',borderRadius:'3px',padding:'10px'}}>
                    <div className='form-group'>
                        <label for='usuario'>Usuario:</label>
                        <input type='text' name={datos.userName} placeholder='Usuario' onChange={handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label for='contrasena'>Contraseña:</label>
                        <input type='password' name={datos.password} placeholder='Contraseña' onChange={handleChange}/>
                    </div>
                    <div className='col mt-3'>
                        <button className='btn btn-primary' onClick={()=> loginIn()}>Entrar</button>                        
                    </div>
                    </div>
                </form>
            </div>
            <div className='col-4'></div>
        </div>
    </div>
    )
}
export default Login;
