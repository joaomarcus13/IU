import React, { useState } from 'react';
import './App.css';
import './global.css'
import imgtest from './assets/images/imgtest.png'
import Aside from './components/Aside/aside'
import Main from './components/Main/main'
import Pesquisar from './components/Search/search'
import ContactDetails from './components/ContactDetails/contactDetails'
import Intro from './components/intro/intro'
import imgUser from './assets/images/7189bwar9pdx.jpg'
import Context from './context'

function App() {

  const [chatactive, setChatactive] = useState(false)
  const [conversas, setConversas] = useState([
    { id: 1, name: 'goncalo', img: imgtest, msg: 'iaiiii' },
    { id: 2, name: 'xico', img: imgtest, msg: 'colé' },
    { id: 3, name: 'joao', img: imgtest, msg: 'falaa' }]
  )
  const [user, setUser] = useState({ id: 1, img: imgUser, name: 'JM', status: 'Disponivel' })


  return (

    <div className='container'>
      <Context.Provider value={{
        chatactive,
        setChatactive,
        conversas,
        setConversas,
        user,
        setUser
      }}>

        <Aside>
        </Aside>

        {
          !chatactive ? <Intro></Intro> : <Main ></Main>
        }

        <Pesquisar></Pesquisar>
        <ContactDetails >
        </ContactDetails>


      </Context.Provider>
    </div>



  );
}

export default App;
