import React, { useState, useEffect } from 'react';
import './App.css';
import './global.css'

import Head from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'
import TypeArea from './components/TypeArea'
import Pesquisar from './components/Search'


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
