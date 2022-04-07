// Componente Messages({props})

import { useEffect, useState } from "react";
import authToken from "../tools/tools.mjs";

const url = "https://web-develop-react-express-chat.herokuapp.com";

// para actualizar mensajes, método GET
function Messages(props) {
    const [messages, setMessages] = useState("");
    async function authGet(url, id, password) {
        const response = await fetch(
            url,
            {
                headers: {
                    // te autoriza, da token autorizado 
                    Authorization: authToken(id, password)
                }
            });
        const data = await response.json();
        const datafull = data.map(
            (item)=><li className='margin-bottom bgMensaje' key={item.time}>Usuario: {item.source} | Mensaje: {item.content}</li>
        )
        setMessages(datafull)
        //console.log(data);
        return data;
    }

    // coge los mensajes actualizados para verlos en pantalla
    function updateMessages() {
       authGet(url + '/messages/', props.id, props.password)
    }

    // método setTimeout() o setInterval() para actualizar cada segundo
    useEffect(
        ()=>{setTimeout(updateMessages, 1000)},
    )

    return (
        <div className='actualizarMensajes flex flex-wrap align-content'>
            <h1>Mensajes del Chat</h1>
            <h3 className='bold'>Mensajes: </h3>
            <ul className='margin-topNo list-style'>{messages}</ul>
        </div>
    );
}
export default Messages;





























