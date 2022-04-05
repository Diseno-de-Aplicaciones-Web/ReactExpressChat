// Componente Login({props})

import { useEffect, useState, useRef } from "react";

// para logearte, método POST
function Login() {


    return (
        <div className='logearte flex'>
            <h1>Logeate para entrar</h1>
            <input className='em' type="text" id="inputUser" placeholder='Usuario' />
            <br />
            <br />
            <input className='em' type="text" id="inputPassword" placeholder='Contraseña' />
            <br />
            <br />
            <button className='clikButton bold em'>Entrar</button>
        </div>
    );
}
export default Login;





       



















 





