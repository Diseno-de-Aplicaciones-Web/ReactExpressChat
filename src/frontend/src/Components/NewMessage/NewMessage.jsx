// Componente NewMessages({props})

import { useEffect, useState, useRef } from "react";

// para enviar un mensaje, método POST
function NewMessage ({id, password}) {
    const [ newMessage, setnewMessage] = useState("");

    return (
        <div className='NuevoMensaje colorBlue'> 
        <h1 className='sinMargin'>Envia un mensaje</h1>
        <textarea></textarea>
        <p>{"Tu mensaje: " + newMessage}</p>
        </div>
    );
}
export default NewMessage;