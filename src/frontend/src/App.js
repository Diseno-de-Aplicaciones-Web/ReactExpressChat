import { useRef, useState } from "react";
import Login from './Components/Login/Login';
import Messages from './Components/Messages/Messages';
import NewMessage from './Components/NewMessage/NewMessage';
import './App.css';


function App() {
  const [id, setId ] = useState(0)
  return (
    <>
      <div className='bg-fondo margin-topNo'>
        <div className='rowGrid'>
          <Login idSetter={setId} />  {/*Login subcomponente del Componente App()*/}
          <Messages id={id} password="abc123" /> {/*Messages subcomponente del Componente App()*/}
          <NewMessage id={id} password="abc123" /> {/*NewMessage subcomponente del Componente App()*/}
        </div>
      </div>
    </>
  );
}

export default App;