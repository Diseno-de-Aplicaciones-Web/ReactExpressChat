// Componente Messages({props})

import { useEffect, useState } from "react";
import authToken from "../tools/tools.mjs";

const host = "https://web-develop-react-express-chat.herokuapp.com";

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
            (item)=><li className='margin-bottom' key={item.time}>Usuario:{item.source} Mensaje:{item.content}</li>
        )
        setMessages(datafull)
        //console.log(data);
        return data;
    }

    // coge los mensajes actualizados para verlos en pantalla
    function updateMessages() {
       authGet(host + '/messages/', props.id, props.password)
    }

    // método setInterval() para actualizar cada segundo
    useEffect(
        ()=>{setTimeout(updateMessages, 1000)},
    )

    return (
        <div className='actualizarMensajes margin-left flex flex-wrap align-content'>
            <h1 className='margin-bottomNo'>Mensajes del Chat</h1>
            <h3 className='bold'>Mensajes: </h3>
            <ul className='margin-topNo list-style bgMensaje'>{messages}</ul>
        </div>
    );
}
export default Messages;





























