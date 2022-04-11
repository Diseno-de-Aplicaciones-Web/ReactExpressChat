import { useState } from "react";
import Login from './Components/Login/Login';
import Messages from './Components/Messages/Messages';
import NewMessage from './Components/NewMessage/NewMessage';
import './App.css';
import SignUp from "./Components/SignUp/SignUp";

function App() {
  const [id, setId] = useState(0);
  const [token, setToken] = useState(0);
  const url = "https://web-develop-react-express-chat.herokuapp.com";

  return (
    <>
      <div className='bg-fondo margin-topNo'>
        <div className='rowGrid'>
        <SignUp idSetter={setId} url={url} /> {/*SignUp (Registro) subcomponente del Componente App()*/} 
       
        <Messages id="1649676830154" password="abc123" /> {/*Messages (ver lista de mensajes) subcomponente del Componente App()*/}
        <NewMessage id={id} token={token} /> {/*NewMessage (enviar mensaje) subcomponente del Componente App()*/}
        </div>
      </div>
    </>
  );
}

export default App;

//<Login idSetter={setId} token={token} />  {/*Login (Iniciar Sesión) subcomponente del Componente App()*/}

// funciona ver mensajes actualizados del chat y enviar mensajes, metiendo id y contraseña a mano
//<Login />
//<Messages id="1649672125202" password="abc123" />
//<NewMessage id="1649672125202" password="abc123" />

// <SignUp idSetter={setId} url={url} /> {/*SignUp (Registro) subcomponente del Componente App()*/} 
//<Messages id={id} token={token} /> {/*Messages (ver lista de mensajes) subcomponente del Componente App()*/}
//<NewMessage id={id} token={token} /> {/*NewMessage (enviar mensaje) subcomponente del Componente App()*/}