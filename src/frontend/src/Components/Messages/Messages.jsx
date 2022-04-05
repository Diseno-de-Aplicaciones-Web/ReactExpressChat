// Componente Messages({props})

import { useEffect, useState, useRef } from "react";
import { getMessages } from "../../apitools.mjs";

// para actualizar mensajes, método GET
function Messages ({id, password}) {
    const [ messages, setMessages] = useState("");

    function updateMessages() {
        getMessages(id, password, setMessages);
    }
    // método setInterval() para actualizar cada segundo
    useEffect(
        ()=>{
            setInterval(updateMessages, 1000)},
        []
    );
    return (
        <div className='actualizarMensajes'>
            <h1 className='sinMargin'>Mensajes del Chat</h1>
            <div>
                <p>{"Mensajes: " + messages}</p>
            </div>
        </div>
    );
}
export default Messages;




       



















 




