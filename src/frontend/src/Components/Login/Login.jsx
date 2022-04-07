// Componente Login({props})

import { useEffect, useState, useRef } from "react";

// para logearte, método POST
function Login() {


    return (
        <div className='logearte flex align-items'>
            <h1>Logeate para entrar</h1>
            <div className='flex '>
                <input className='em margin-top' type="text" id="inputUser" placeholder='Usuario' />
                <input className='em margin-top' type="text" id="inputPassword" placeholder='Contraseña' />
                <button className='clikButton bold em marginEntrar margin-top buttonColor borde-fino'>Entrar</button>
            </div>
        </div>
    );
}
export default Login;































