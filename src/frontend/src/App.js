import Login from './Components/Login/Login';
import Messages from './Components/Messages/Messages';
import NewMessage from './Components/NewMessage/NewMessage';
import './App.css';



function App() {
  return (
    <>

      <body className='bg-fondo margin-top'>
        <div className='grid'>
          <Login />
          <Messages id="1649145553851" password="abc123" />
          <NewMessage />
        </div>
      </body>

    </>
  );
}

export default App;