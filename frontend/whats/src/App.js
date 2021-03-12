import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import './global.css'
import Aside from './components/Aside/aside'
import Main from './components/Main/main'
import Intro from './components/intro/intro'
import Context from './context'
import Login from './components/Login/Login';
import { api } from './config/api';


function Home() {
  const { chatactive, user } = useContext(Context)


  useEffect(() => {
    return () => {
      if (user) {
        api.closeApp(user)
        console.log('close app')
      }
    }
  }, [])

  return (
    <>
      <Aside>
      </Aside>
      {
        !chatactive ? <Intro></Intro> : <Main ></Main>
      }

    </>
  )
}

function App() {

  const [chatactive, setChatactive] = useState(false)
  const [conversas, setConversas] = useState([])
  //{ id: 'ZHbGuA91WTgCHouCHhkMlESdwyI3', name: 'goncalo', img: imgtest, msg: 'ola '},{ id: 'Olh40aHB0eOFppgXPeDHKfjwtPF3', name: 'jr', img: imgtest, msg: 'ola '}
  const [contatos, setContatos] = useState([])
  const [user, setUser] = useState(null)
  //{ id: 'IWZYQoIL45cBdX4uCLz1QNFSEk12', img: imgtest, name: 'Teste', status: 'ola', chats: [{ idChat: 'GsrYJf46HNUizig7eMtq', idUserChat: 'AfMATHGwMlZtH6tCa4yRRPD8CaN2', img: '/static/media/imgtest.d5d427e8.png', name: 'jm' }] }
  //const [user, setUser] = useState({ id: 'IWZYQoIL45cBdX4uCLz1QNFSEk12', name: 'Teste 1', status: 'ola',phone: '+551212345678'})
  const [msg, setMsg] = useState([])
  const [isRightOpen, setIsRightOpen] = useState(false)


  /*
  function handleSetConversas() {
                                                //lembrar de trocar
    firebase.firestore().collection('users').doc('IWZYQoIL45cBdX4uCLz1QNFSEk12').onSnapshot(doc => {
      console.log(doc.data().chats)
      setConversas(doc.data().chats)
    })

  } 
  */




  return (

    <div className='container'>
      <Context.Provider value={{
        chatactive,
        setChatactive,
        conversas,
        setConversas,
        user,
        setUser,
        contatos,
        setContatos,
        setMsg,
        msg,
        isRightOpen,
        setIsRightOpen
      }}>

        {user ? <Home></Home> : <Login></Login>}

      </Context.Provider>
    </div>
  );
}

export default App;
