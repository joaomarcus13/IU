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


function App() {


  const [chatactive, setChatactive] = useState(false)
  const [conversas, setConversas] = useState([
    { id: 1, name: 'goncalo', img: imgtest, msg: 'iaiiii' },
    { id: 2, name: 'xico', img: imgtest, msg: 'iaiiii' },
    { id: 3, name: 'joao', img: imgtest, msg: 'iaiiii' }]
  )


  return (
    <div className='cont'>

      <div className='container'>

        <Aside stateConversas={{ conversas, setConversas }} stateChatactive={{ chatactive, setChatactive }}></Aside>
        {
          !chatactive ?
            <Intro></Intro>
            :
            <Main stateChatactive={{ chatactive, setChatactive }}></Main>
        }


      </div>
      <Pesquisar></Pesquisar>
      <ContactDetails></ContactDetails>

    </div>

  );
}

export default App;
