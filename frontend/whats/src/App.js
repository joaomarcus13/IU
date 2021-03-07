import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import './global.css'
import imgtest from './assets/images/imgtest.png'
import Aside from './components/Aside/aside'
import Main from './components/Main/main'
import Pesquisar from './components/Search/search'
import ContactDetails from './components/ContactDetails/contactDetails'
import Intro from './components/intro/intro'

import Context from './context'
import Login from './components/Login/Login';
import firebase from './config/api'

function Home() {
  const { chatactive } = useContext(Context)
  return (
    <>
      <Aside>
      </Aside>
      {
        !chatactive ? <Intro></Intro> : <Main ></Main>
      }

      <Pesquisar></Pesquisar>
      <ContactDetails >
      </ContactDetails>
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
  //const [user, setUser] = useState(null)
  const [msg, setMsg] = useState([])

  function handleSetConversas() {
                                                //lembrar de trocar
    firebase.firestore().collection('users').doc('IWZYQoIL45cBdX4uCLz1QNFSEk12').onSnapshot(doc => {
      console.log(doc.data().chats)
      setConversas(doc.data().chats)
    })

  } 
  
  

 /*  useEffect(() => {
     handleSetConversas()
  }, [user]) */

 

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
        msg
      }}>

        {user ? <Home></Home> : <Login></Login>}

      </Context.Provider>
    </div>
  );
}

export default App;
