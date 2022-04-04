// Componente NewMessages({props})

import { useEffect, useState, useRef } from "react";

// para enviar un mensaje, método POST
function NewMessage ({id, password}) {
    return (
        <div class="NuevoMensaje">
        <h1>Envia un mensaje</h1>
        <textarea></textarea>
        </div>
    );
}
export default NewMessage;