// Componente Login({idSetter})

import { useEffect, useState, useRef } from "react";

const url = "https://web-develop-react-express-chat.herokuapp.com";

// Componente Login para realizar el Registro del usuario, método POST
function Login({idSetter}) { // ({idSetter}) en vez de (props)
    const [xuserName, setXuserName] = useState("");
    const [xpassword, setXpassword] = useState("");

    // Función crea cuerpo con datos para envio POST
    async function post(url, data) {
        const response = await fetch(
            url,
            {
                method: 'POST',
                body: data,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        const responseData = await response.json();
        return responseData;
    }

    // Evento onChange del input text Usuario
    function userNameHandleChange(event) {
        setXuserName(event.target.value)
    }

    // Evento onChange del input text Contraseña
    function passwordHandleChange(event) {
        setXpassword(event.target.value)
    }

    // Evento onClik del botón, con el clik envia los datos, (la url, el nombre de usuario y la contraseña)
    function loginSendData() {
        const data = JSON.stringify({ userName: xuserName, password: xpassword });
        const newIdPromise = post(url + "/login/", data);
        newIdPromise.then(
            newId => { 
                idSetter(newId);
                console.log(data, newId);
            }
        )

    }

    return (
        <div className='logearte flex align-items'>
            <h1>Regístrate</h1>
            {/*<h1>Logeate para entrar</h1>*/} {/* Inicia Sesión */}
            <div className='flex '>
                <input className='em margin-top' type="text" id="userName" onChange={userNameHandleChange} value={xuserName} placeholder='Usuario' />
                <input className='em margin-top' type="text" id="password" onChange={passwordHandleChange} value={xpassword} placeholder='Contraseña' />
                <button className='clikButton bold em marginEntrar margin-top buttonColor borde-fino' id="loginSendData" onClick={loginSendData}>Entrar</button>
            </div>
        </div>
    );
}
export default Login;































