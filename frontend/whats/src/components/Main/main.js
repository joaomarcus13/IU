import React, { useState, useContext, useEffect, useRef } from 'react';
import Context from '../../context';
import Head from '../Header/header'
import ItemMensagem from '../itemMensagem/itemMensagem'
import TypeArea from '../TypeArea/typeArea'
import firebase from '../../config/api'
import './main.css'

function Main() {

  const { user, chatactive } = useContext(Context)
  const [ msgs, setMsgs ] = useState([])
  const [usersInChat,setUsersInChat] = useState([])
  const scrollRef = useRef()

  function handleSetMsgs(data) {
    setMsgs(data)
  }

  useEffect(() => {

    

    if (chatactive !== false) {
      firebase.firestore().collection('conversas').doc(chatactive.idChat).onSnapshot(docs => {
        if (docs.exists) {
          
          handleSetMsgs(docs.data().mensagens)
          setUsersInChat(docs.data().users)

          if(scrollRef.current.scrollHeight > scrollRef.current.offsetHeight){
            scrollRef.current.scrollTop =  scrollRef.current.scrollHeight - scrollRef.current.offsetHeight 
          }
          
        }
      })



    }

  }, [chatactive])

  return (
    <>
      <main className='area-main'>
        <Head></Head>
        <div className='main'>
 
          <div ref={scrollRef} className='sc'>
            {msgs.map(e => <ItemMensagem text={e.text} emissor={e.emissor} hora={e.hora} user={user}></ItemMensagem>) }
          </div>
        </div>
        <TypeArea users={usersInChat} scrollRef = {scrollRef}></TypeArea>
      </main>
    </>
  )
}


export default Main