// Componente SignUp({idSetter})

import { useEffect, useState } from "react";

const url = "https://web-develop-react-express-chat.herokuapp.com";

// Componente SignUp para realizar el Registro del usuario, método POST
function SignUp({ idSetter, passwordSetter }) { // ({idSetter}) en vez de (props)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

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
        setUserName(event.target.value)
    }

    // Evento onChange del input text Contraseña
    function passwordHandleChange(event) {
        setPassword(event.target.value)
    }

    // Evento onClik del botón, con el clik envia los datos, (la url, el nombre de usuario y la contraseña)
    function loginSendData() {
        if (userName === "" | password === "") {
            window.alert("¡El campo no puede quedar vacío! " + " ¡Debes registrarte para entrar!");
        }
        const data = JSON.stringify({ userName: userName, password: password });
        const newIdPromise = post(url + "/login/", data);
        newIdPromise.then(
            newId => {
                idSetter(newId);
                passwordSetter(password);
                console.log(data, newId);
            }
        )

    }

    return (
        <div>
            <div id="registro">
                <h1 className='text'>Regístrate</h1>
                {/*<h1>Logeate para entrar</h1>*/} {/* Inicia Sesión */}
                <div className='flex flex-wrap align-items justify-contentCenter'>
                    <input className='em inputSpace margin-left' type="text" id="userName" onChange={userNameHandleChange} value={userName} placeholder='Usuario' />
                    <input className='em inputSpace margin-left' type="text" id="password" onChange={passwordHandleChange} value={password} placeholder='Contraseña' />
                </div>
                <div className='text'>
                    <button className='clikButton bold em marginEntrar inputSpace buttonColor borde-fino' id="loginSendData" onClick={loginSendData}>Entrar</button>
                </div>
            </div>
        </div >
    );
}
export default SignUp;

//'colFlex'