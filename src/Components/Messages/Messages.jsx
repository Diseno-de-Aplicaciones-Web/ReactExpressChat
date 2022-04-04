// Componente Messages({props})

import { useEffect, useState, useRef } from "react";

// para actualizar mensajes, método GET
function Messages () {
    const [ messages, setMessages] = useState("");

    function updateMessages() {
        getMessages(setMessages);
    }
    // método setInterval() para actualizar cada segundo
    useEffect(
        ()=>{
            setInterval(updateMessages, 1000)},
        []
    );
    return (
        <div class="actualizarMensajes">
            <h1>Estos son los mensages.</h1>
            <div>{messages}</div>
        </div>
    );
}
export default Messages;




       



















 




