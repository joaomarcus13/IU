import React, { useContext, useState } from 'react';
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
  const {chatactive} = useContext(Context)
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
  const [conversas, setConversas] = useState([{ id: 'ZHbGuA91WTgCHouCHhkMlESdwyI3', name: 'goncalo', img: imgtest, msg: 'ola '},{ id: 'Olh40aHB0eOFppgXPeDHKfjwtPF3', name: 'jr', img: imgtest, msg: 'ola '}])
  const [contatos] = useState([{ id: 1, name: 'goncalo', img: imgtest, status: 'Disponivel' }])
  const [user, setUser] = useState({ id: 'IWZYQoIL45cBdX4uCLz1QNFSEk12', img: imgtest,  name: 'Teste',  status:'ola'})
  //const [user, setUser] = useState(null)
  const [msg, setMsg] = useState([])
  

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
        setMsg,
        msg
      }}>

      { user?<Home></Home>:<Login></Login> } 

      </Context.Provider>
    </div>
  );
}

export default App;
