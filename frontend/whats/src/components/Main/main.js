import React, { useState, useContext, useEffect, useRef } from 'react';
import Context from '../../context';
import Head from '../Header/header'
import ItemMensagem from '../itemMensagem/itemMensagem'
import TypeArea from '../TypeArea/typeArea'
import  { api } from '../../config/api'
import './main.css'

function Main  () {

  const { user, chatactive, isRightOpen } = useContext(Context)
  const [msgs, setMsgs] = useState([])
  const [usersInChat, setUsersInChat] = useState([])
  const scrollRef = useRef()


  function handleSetMsgs(data) {
    setMsgs(data)
  }

  useEffect(() => {



    if (chatactive !== false) {

      api.getMessages(chatactive,scrollRef,handleSetMsgs,setUsersInChat)
      
    }

  }, [chatactive])

  return (
    <>
      <main className={`area-main ${isRightOpen? 'area-main-min':''}`}>
        <Head></Head>
        <div className='main'>

          <div ref={scrollRef} className='sc'>
            {msgs.map(e => <ItemMensagem key={e.hora} text={e.text} emissor={e.emissor} hora={e.hora} user={user}></ItemMensagem>)}
          </div>
        </div>
        <TypeArea users={usersInChat} scrollRef={scrollRef}></TypeArea>
      </main>
    </>
  )
}


export default Main