// Componente Login()

import { useEffect, useState, useRef } from "react";
import authToken from "../tools/tools.mjs";

const url = "https://web-develop-react-express-chat.herokuapp.com";

// Componente Login para logearte (Iniciar Sesión), método POST
function Login() { 
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState(0);
    const token = authToken(id, password);

  
     // función autentificación GET
    async function authGet(url, token) { 
        const response = await fetch(
            url,
            {
                headers: { // te autoriza, da token autorizado
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: token
                }
            });
        return response.status;
    }


// Evento onChange del input text Usuario
function userNameHandleChange(event) {
    setUserName(event.target.value)
}

// Evento onChange del input text Contraseña
function passwordHandleChange(event) {
    setPassword(event.target.value)
}

// Comparar el usuario y contraseña para saber si el usuario esta registrado 
function usuarioRegistrado() {
    if ( userName === "" | password === ""){
        window.alert("¡El campo no puede quedar vacío!");
    }else {
        if ( userName !== "" && password !== ""){
            window.alert("¡Debes registrarte para entrar!");
        }
    }

    
}
    

    return (
        <div className='flex flex-wrap justify-content align-itemsEnd margin-bottom'>
            <div id="login">
                <h1>Inicia Sesión</h1>
                <div className='colFlex'>
                    <input className='em inputSpace' type="text" id="" onChange={userNameHandleChange} value={userName} placeholder='Usuario' />
                    <input className='em inputSpace' type="text" id="" onChange={passwordHandleChange} value={password} placeholder='Contraseña' />
                    <button className='clikButton bold em marginEntrar inputSpace buttonColor borde-fino' id="" onClick={usuarioRegistrado}>Entrar</button>
                </div>
            </div>
            <div id="desconectar">
                <h1>Cierra Sesión</h1>
                <div className='colFlex'>
                    <p className="text cursiva bold">¿Quieres salir</p>
                    <p className="text cursiva bold">de la aplicación?</p>
                    <button className='clikButton bold em marginEntrar inputSpace buttonColor borde-fino' id="loginAuthToken" onClick>Desconectar</button>
                </div>
            </div>
        </div >
    );




}
export default Login;

// disabled   => para deshabilitar un campo input














/*
// Componente Login para realizar el Registro del usuario, método POST
    return (
        <div className='flex flex-wrap justify-content align-items margin-bottom padding-top'>
            <div id="registro">
                <h1>Regístrate</h1>
               
                <div className='colFlex'>
                    <input className='em inputSpace' type="text" id="userName" onChange={userNameHandleChange} value={xuserName} placeholder='Usuario' />
                    <input className='em inputSpace' type="text" id="password" onChange={passwordHandleChange} value={xpassword} placeholder='Contraseña' />
                    <button className='clikButton bold em marginEntrar inputSpace buttonColor borde-fino' id="loginSendData" onClick={loginSendData}>Entrar</button>
                </div>
            </div>
            <div id="login">
                <h1>Inicia Sesión</h1>
                <div className='colFlex'>
                    <input className='em inputSpace' type="text" id="userName" onChange={userNameHandleChange} value={xuserName} placeholder='Usuario' />
                    <input className='em inputSpace' type="text" id="password" onChange={passwordHandleChange} value={xpassword} placeholder='Contraseña' />
                    <button className='clikButton bold em marginEntrar inputSpace buttonColor borde-fino' id="loginSendData" onClick={loginSendData}>Entrar</button>
                </div>
            </div>
            <div id="desconectar">
                <h1>Cierra Sesión</h1>
                <div className='colFlex'>
                    <p className="text cursiva bold">¿Quieres salir</p>
                    <p className="text cursiva bold">de la aplicación?</p>
                    <button className='clikButton bold em marginEntrar inputSpace buttonColor borde-fino' id="loginSendData" onClick={loginSendData}>Desconectar</button>
                </div>
            </div>
        </div >
    );
}
*/






