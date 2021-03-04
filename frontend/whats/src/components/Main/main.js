import React, { useState, useContext, useEffect } from 'react';
import Context from '../../context';
import Head from '../Header/header'
import ItemMensagem from '../itemMensagem/itemMensagem'
import TypeArea from '../TypeArea/typeArea'
import firebase from '../../config/api'
import './main.css'

function Main() {

  const { user, chatactive } = useContext(Context)
  const [ msgs, setMsgs ] = useState([])

  function handleSetMsgs(data) {
    setMsgs(data)
  }

  useEffect(() => {

    if (chatactive !== false) {
      firebase.firestore().collection('conversas').doc(chatactive.idChat).onSnapshot(docs => {
        if (docs.exists) {
    
          handleSetMsgs(docs.data().mensagens)
          
        }
      })
    }
  }, [chatactive])

  return (
    <>
      <main className='area-main'>
        <Head></Head>
        <div className='main'>

          <div className='sc'>
            {msgs.map(e => <ItemMensagem text={e.text} emissor={e.emissor} user={user}></ItemMensagem>) }
          </div>
        </div>
        <TypeArea></TypeArea>
      </main>
    </>
  )
}


export default Main