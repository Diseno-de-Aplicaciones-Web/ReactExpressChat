// Componente NewMessages({props})

import { useEffect, useState, useRef } from "react";

// para enviar un mensaje, método POST
function NewMessage ({id, password}) {
    const [ newMessage, setnewMessage] = useState("");

    return (
        <div className='NuevoMensaje margin-left flex flex-wrap align-content colorBlue'> 
        <h1>Envia un mensaje</h1>
        <textarea className='fontTextarea colorBlue heightTextarea widthTextarea'></textarea>
        <h3 className='bold'>Tu mensaje: </h3>
        <p className='margin-top'>{newMessage}</p>
        </div>
    );
}
export default NewMessage;