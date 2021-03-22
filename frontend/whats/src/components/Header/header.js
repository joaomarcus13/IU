import './header.css'
import '../ContactDetails/contactDetails.css'
import imgtest from '../../assets/images/imgtest.webp'
import Context from '../../context'
import { useContext, useEffect, useState } from 'react'
import Pesquisar from '../Search/search'
import ContactDetails from '../ContactDetails/contactDetails'
import { api } from '../../config/api'

function Header() {

  const { chatactive, user } = useContext(Context)
  const [isOptionsActive, setIsOptionActive] = useState(false)
  const { setIsRightOpen } = useContext(Context)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [isDetailsActive, setIsDetailsActive] = useState(false)
  const [isDeleteActive, setIsDeleteActive] = useState(false)

  const [chatactiveUserLastSeen, setChatactiveUserLastSeen] = useState(null)


  function handleOptions() {
    setIsOptionActive(!isOptionsActive)
  }


  let horaChat = new Date(chatactiveUserLastSeen).getHours()
  let minutoChat = String(new Date(chatactiveUserLastSeen).getMinutes()).padStart(2, '0')
  //let seenTime = chatactiveUserLastSeen !== 'online' ? `visto por último hoje às ${horaChat}:${minutoChat}` : chatactiveUserLastSeen
  let seenTime = ''

  if (chatactiveUserLastSeen === 'online') {
    seenTime = 'online'
  } else {

    let sub = new Date() - new Date(chatactiveUserLastSeen)

    if (sub < 86400000) {
     
      seenTime = `visto por último hoje às ${horaChat}:${minutoChat}`
    }
    else if (sub >= 86400000 && sub < 86400000 * 2) {
    
      seenTime = `visto por último ontem às ${horaChat}:${minutoChat}`
    } else {

      seenTime = `visto por último ${new Date(chatactiveUserLastSeen).getDate()}/${new Date(chatactiveUserLastSeen).getMonth() + 1}/${new Date(chatactiveUserLastSeen).getFullYear()}`
    }

  }


  async function getLastTime() {
    await api.getChatActiveUserLastSeen(chatactive, setChatactiveUserLastSeen)
    //console.log('use ls', chatactiveUserLastSeen)

  }

  useEffect(() => {
    setTimeout(() => {
      getLastTime()
    }, 500);
  }, [chatactive])

  return (
    <>
      <nav className='header'>

        <div className='info-chat' onClick={() => { setIsDetailsActive(true); setIsRightOpen(true) }}>
          <div className='img-perfil-chat'>
            <img src={imgtest} alt="" />

          </div>
          <div className='info'>

            <h1>{chatactive.name}</h1>
            <div className='span'>{seenTime}</div>

          </div>
        </div>

        <div className='icons-chat'>
          <div className='icon-search'>
            <svg onClick={() => { setIsSearchActive(true); setIsRightOpen(true) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
          </div>

          <div className={`icon-options-chat ${isOptionsActive ? 'bg-icon-click' : ''}`} onClick={handleOptions}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
          </div>
        </div>

        <div className={`options-chat ${isOptionsActive ? 'options-chat-open' : ''}`} >
          <ul>
            <li onClick={() => { setIsDetailsActive(true); setIsOptionActive(false); setIsRightOpen(true) }}>
              Dados do contato
            </li>
            <li>
              Selecionar mensagens
            </li>
            <li>
              Silenciar notificaçoes
            </li>
            <li>
              Limpar mensagens
            </li>
            <li onClick={() => setIsDeleteActive(true)}>
              Apagar conversa
            </li>

          </ul>

        </div>

      </nav>

      <Pesquisar isSearchActive={isSearchActive} setIsSearchActive={setIsSearchActive} ></Pesquisar>
      <ContactDetails
        isDetailsActive={isDetailsActive}
        setIsDetailsActive={setIsDetailsActive}
        isDeleteActive={isDeleteActive}
        setIsDeleteActive={setIsDeleteActive} />


    </>

  )
}



export default Header