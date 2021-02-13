import React, { useState, useEffect } from 'react';
import './App.css';
import './global.css'

import Head from './components/Header/header'
import Aside from './components/Aside/aside'
import Main from './components/Main/main'
import TypeArea from './components/TypeArea/typeArea'
import Pesquisar from './components/Search/search'


function App() {

  return (
    <div className = 'div'>
    <div className='container'>
 
      <Head></Head>
      <Aside></Aside>
      <Main></Main>
      <TypeArea></TypeArea>
        
    </div>

    <div className='grid-search-msg'>
      <Pesquisar></Pesquisar>    
      <Head></Head>
      <Aside></Aside>
      <Main></Main>
      <TypeArea></TypeArea>

    </div>
    </div>
  );
}

export default App;
