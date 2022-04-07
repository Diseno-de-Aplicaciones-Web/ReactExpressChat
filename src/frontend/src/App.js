import { useState } from "react";
import Login from './Components/Login/Login';
import Messages from './Components/Messages/Messages';
import NewMessage from './Components/NewMessage/NewMessage';
import './App.css';



function App() {
  return (
    <>
      <div className='bg-fondo margin-topNo'>
        <div className='grid'>
          <Login />
          <Messages id="1649279872037" password="abc123" />
          <NewMessage />
        </div>
      </div>
    </>
  );
}

export default App;