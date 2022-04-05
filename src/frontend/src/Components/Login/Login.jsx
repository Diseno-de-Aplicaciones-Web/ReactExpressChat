// Componente Login({props})

import { useEffect, useState, useRef } from "react";

// para logearte, método POST
function Login() {


    return (
        <div className='logearte flex align-items'>
            <h1>Logeate para entrar</h1>
            <div className='flex '>
                <input className='em' type="text" id="inputUser" placeholder='Usuario' />
                <br />
                <br />
                <input className='em' type="text" id="inputPassword" placeholder='Contraseña' />
                <br />
                <br />
                <button className='clikButton bold em marginEntrar buttonEntrar'>Entrar</button>
            </div>
        </div>
    );
}
export default Login;































