import React, { useState,  useContext } from 'react';
import Context from '../../context';
import Head from '../Header/header'
import ItemMensagem from '../itemMensagem/itemMensagem'
import TypeArea from '../TypeArea/typeArea'
import './main.css'

function Main() {

  const {user} = useContext(Context) 

  const [msgs, setMsgs] = useState([
    { text: 'kkkkkk', emissor: 2 },
    { text: 'blabla', emissor: 1 },
    { text: 'mfkdlmgkt', emissor: 2 },
    { text: 'kkkkkk', emissor: 2 },
    { text: 'blabla', emissor: 1 },
    { text: 'mfkdlmgkt', emissor: 2 },
    { text: 'kkkkkk', emissor: 2 },
    { text: 'blabla', emissor: 1 },
    { text: 'mfkdlmgkt', emissor: 2 },
    { text: 'kkkkkk', emissor: 2 },
    { text: 'blabla', emissor: 1 },
    { text: 'mfkdlmgkt', emissor: 2 },
    { text: 'kkkkkk', emissor: 2 },
    { text: 'blabla', emissor: 1 },
    { text: 'mfkdlmgkt', emissor: 2 },
    { text: 'kkkkkk', emissor: 2 },
    { text: 'blabla', emissor: 1 },
    { text: 'mfkdlmgkt', emissor: 2 },
    { text: 'kkkkkk', emissor: 2 },
    { text: 'blabla', emissor: 1 },
    { text: 'mfkdlmgkt', emissor: 2 },
    { text: 'kkkkkk', emissor: 2 },
    { text: 'blabla', emissor: 1 },
    { text: 'mfkdlmgkt', emissor: 2 },
    { text: 'kkkkkk', emissor: 2 },
    { text: 'blabla', emissor: 1 },
    { text: 'mfkdlmgkt', emissor: 2 },
    { text: 'kkkkkk', emissor: 2 },
    { text: 'blabla', emissor: 1 },
    { text: 'mfkdlmgkt', emissor: 2 },
    { text: 'kkkkkk', emissor: 2 },
    { text: 'blabla', emissor: 1 },
    { text: 'mfkdlmgkt', emissor: 2 },
  ])

  return (
    <>
      <main className='area-main'>
        <Head></Head>
        <div className='main'>

          <div className='sc'>
            {msgs.map(e => <ItemMensagem text={e.text} emissor={e.emissor} user={user}></ItemMensagem>)}
          </div>
        </div>
        <TypeArea></TypeArea>
      </main>
    </>
  )
}


export default Main