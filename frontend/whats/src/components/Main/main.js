import React, { useState,  useContext } from 'react';
import Context from '../../context';
import Head from '../Header/header'
import ItemMensagem from '../itemMensagem/itemMensagem'
import TypeArea from '../TypeArea/typeArea'
import './main.css'

function Main() {

  const {user} = useContext(Context) 
  const {msg} = useContext(Context)
  const {chatactive} = useContext(Context)

  return (
    <>
      <main className='area-main'>
        <Head></Head>
        <div className='main'>

          <div className='sc'>
            {msg.map(e => <ItemMensagem text={e.text} emissor={e.emissor} user={user}></ItemMensagem>) }
          </div>
        </div>
        <TypeArea></TypeArea>
      </main>
    </>
  )
}


export default Main