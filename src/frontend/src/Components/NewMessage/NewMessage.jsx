// Componente NewMessages({props})

import { useEffect, useState, useRef } from "react";
import  authToken  from "../tools/tools.mjs";

const url = "https://web-develop-react-express-chat.herokuapp.com";

// para enviar un mensaje, método POST
function NewMessage (props) {
    
    const [ newMessage, setNewMessage] = useState("");
    const token = authToken(props.id, props.password);
    const data = JSON.stringify({content: newMessage});
    
    
    // función autentificación POST
    async function authPost(url, token, data) {
        const response = await fetch(
            url,
            {
                method: "POST",
                body: data,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: token
                }
            }
        );
        const responseData = await response.json();
        console.log(responseData)
    }

    // Evento onChange en React, cada vez que se escribe una letra en el textarea se invoca el método handleChange
    // y este manda el valor capturado para ser guardado, a la variable de estado que está asignada al atributo value
    // y se muestra en el textarea
    function newMessagehandleChange(event) {
        setNewMessage(event.target.value);
    }

    // Evento onClick del button, para enviar el mensaje
    function sendMessageTextarea() { 
        const token = authToken(props.id, props.password);
        const data = JSON.stringify({content: newMessage});
        console.log(data);
        authPost(props.url + "/message/", props.token, data);
        //setNewMessage(token, data)
    }

    return (
        <div className='NuevoMensaje flex flex-wrap align-content colorBlue'> 
        <h1>Envia un mensaje</h1>
        <textarea className='fontTextarea colorBlue heightTextarea widthTextarea' onChange={newMessagehandleChange} value={newMessage}></textarea>
        <button className='colorBlue bold em buttonColor borde-fino' onClick={sendMessageTextarea} value={newMessage}>Enviar</button>
        <p className='margin-top'>{newMessage}</p>
        </div>
    );
}
export default NewMessage;