// Componente Messages({props})

import { useEffect, useState, useRef } from "react";
import { getMessages } from "../../apitools.mjs";

// para actualizar mensajes, método GET
function Messages({ id, password }) {
    const [messages, setMessages] = useState("");

    function updateMessages() {
        getMessages(id, password, setMessages);
    }
    // método setInterval() para actualizar cada segundo
    useEffect(
        () => {
            setInterval(updateMessages, 1000)
        },
        []
    );
    return (
        <div className='actualizarMensajes margin-left flex flex-wrap align-content'>
            <h1>Mensajes del Chat</h1>
            <h3 className='bold margin-bottom'>Mensajes: </h3>
            <p className='margin-top'>{messages}</p>
        </div>
    );
}
export default Messages;





























