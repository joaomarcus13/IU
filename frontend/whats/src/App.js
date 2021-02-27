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
  const [conversas, setConversas] = useState([
    { id: 1, name: 'goncalo', img: imgtest, msg: 'iaiiii' },
    { id: 2, name: 'xico', img: imgtest, msg: 'colé' },
    { id: 3, name: 'xico', img: imgtest, msg: 'colé' },
    { id: 4, name: 'xico', img: imgtest, msg: 'colé' },
    { id: 5, name: 'xico', img: imgtest, msg: 'colé' },
    { id: 6, name: 'xico', img: imgtest, msg: 'colé' },
    { id: 7, name: 'xico', img: imgtest, msg: 'colé' },
    { id: 8, name: 'xico', img: imgtest, msg: 'colé' },
    { id: 9, name: 'joao', img: imgtest, msg: 'falaa' }]
  )
  const [contatos] = useState([
    { id: 1, name: 'goncalo', img: imgtest, status: 'Disponivel' },
    { id: 2, name: 'jose', img: imgtest, status: 'Ocupado' },
    { id: 3, name: 'francisco', img: imgtest, status: 'Trabalhando' },
    { id: 4, name: 'marcos', img: imgtest, status: 'Disponivel' },
    { id: 5, name: 'marcos', img: imgtest, status: 'Disponivel' },
    { id: 6, name: 'marcos', img: imgtest, status: 'Disponivel' },
    { id: 7, name: 'marcos', img: imgtest, status: 'Disponivel' },
    { id: 8, name: 'marcos', img: imgtest, status: 'Disponivel' },
    { id: 9, name: 'marcos', img: imgtest, status: 'Disponivel' },
    { id: 10, name: 'marcos', img: imgtest, status: 'Disponivel' },
    { id: 111, name: 'joao', img: imgtest, status: 'Ocupado' }]
  )
  const [user, setUser] = useState(null)
  //{ id: 1, img: imgUser, name: 'JM', status: 'Disponivel' }


  return (

    <div className='container'>
      <Context.Provider value={{
        chatactive,
        setChatactive,
        conversas,
        setConversas,
        user,
        setUser,
        contatos
      }}>

      { user?<Home></Home>:<Login></Login> } 

      </Context.Provider>
    </div>



  );
}

export default App;
