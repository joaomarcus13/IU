import React, { useState, useEffect } from 'react';
import './App.css';
import './global.css'
import imgtest from './assets/images/imgtest.png'
import Head from './components/Header/header'
import Aside from './components/Aside/aside'
import Main from './components/Main/main'
import TypeArea from './components/TypeArea/typeArea'
import Pesquisar from './components/Search/search'
import ContactDetails from './components/ContactDetails/contactDetails'
import Intro from './components/intro/intro'
import imgUser from './assets/images/7189bwar9pdx.jpg'


function App() {


  const [chatactive, setChatactive] = useState(false)
  const [conversas, setConversas] = useState([
    { id: 1, name: 'goncalo', img: imgtest, msg: 'iaiiii' },
    { id: 2, name: 'xico', img: imgtest, msg: 'colé' },
    { id: 3, name: 'joao', img: imgtest, msg: 'falaa' }]
  )
  const [user, setUser] = useState({ id: 1, img: imgUser, name: 'JM',status:'Disponivel' })

  return (
    <div className='cont'>

      <div className='container'>

        <Aside
          stateConversas={{ conversas, setConversas }}
          stateChatactive={{ chatactive, setChatactive }}
          user={user}>
        </Aside>
        
        {
          !chatactive ?
            <Intro></Intro>
            :
            <Main stateChatactive={{ chatactive, setChatactive }} user={user}></Main>
        }

        <Pesquisar></Pesquisar>
        <ContactDetails
          stateChatactive={{ chatactive, setChatactive }} >
        </ContactDetails>


      </div>
      

    </div>

  );
}

export default App;
