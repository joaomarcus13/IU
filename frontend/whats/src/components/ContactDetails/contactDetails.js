import './contactDetails.css'
import imgtest from '../../assets/images/imgtest.png'
import Context from '../../context'
import { useContext } from 'react'
import {api} from '../../config/api'

function ContactDetails( {isDetailsActive,setIsDetailsActive,isDeleteActive, setIsDeleteActive}){

    const {chatactive,user,conversas,setChatactive,setIsRightOpen} = useContext(Context) 
   
    function deleteChat(){

        api.deleteChat(conversas,chatactive,user)

    
        setIsDeleteActive(false)
        setChatactive(false)
        setIsDetailsActive(false)
        setIsRightOpen(false)
    }

    return(
        <>
        <div className={`container-opacity  ${isDeleteActive? 'container-opacity-open': ''}`}>
            <div className={`delete-chat  ${isDeleteActive? 'delete-chat-open': ''}`}>
                <h1>Apagar conversa com "{chatactive.name}"?</h1>
                <span>
                    <button id='cancelar' onClick={() => setIsDeleteActive(false)}>CACELAR</button>
                    <button id='apagar-chat' onClick={deleteChat}>APAGAR</button>
                </span>
            </div>
        </div>

        <div className={`contact-details ${isDetailsActive? 'contact-details-open' : ''}`}>
            <div className='header'>
                <svg onClick={() => {setIsDetailsActive(false); setIsRightOpen(false)}} className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path></svg>
                <div className='label'>Dados do contato</div>
            </div>


            <div className={`scroll ${isDetailsActive? 'scroll-open' : ''}`}>

                <div className='imgPerfil'>
                    <img className='img' alt="img perfil" src={imgtest}></img>
                    <div className='info'>
                      <h1>{chatactive.name}</h1>
                      <div className='span'>visto por ultimo hoje as 15:00</div>
                    </div>
                </div>

                <div className='midia'>
                    <div className='label'>Mídia, links e docs <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 21" width="10" height="21"><path fill="currentColor" d="M1 15.75l5.2-5.2L1 5.35l1.5-1.5 6.5 6.7-6.6 6.6-1.4-1.4z"></path></svg>
                    </div>
                    <div className='img-midia'>
                        <img src={imgtest}  alt=" " ></img>
                    </div>
                </div>

                <div className='options'>
                    <h1>Silenciar notificações <input type="checkbox" color= 'var(--chat)'></input> <div className='seta'> </div></h1>
                    <h1>Mensagens favoritas <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 21" width="10" height="21"><path fill="currentColor" d="M1 15.75l5.2-5.2L1 5.35l1.5-1.5 6.5 6.7-6.6 6.6-1.4-1.4z"></path></svg> </h1>
                    <h1 id='mens'>Mensagens temporárias <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 21" width="10" height="21"><path fill="currentColor" d="M1 15.75l5.2-5.2L1 5.35l1.5-1.5 6.5 6.7-6.6 6.6-1.4-1.4z"></path></svg></h1>
                    <span>Desativadas</span>
                    
                </div>

                <div className='recados'>
                    <h1>Recado e número de telefone</h1>
                    <span>{chatactive.phone}</span>
                </div>

                <div className='grupos'>
                    <h1>Grupos em comum <span>0</span>  </h1>
                    
                </div>

                <div className='ops'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 2.8c-5.3 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7 9.7-4.3 9.7-9.7-4.4-9.7-9.7-9.7zm-7.3 9.7c0-4 3.3-7.3 7.3-7.3 1.6 0 3.1.5 4.3 1.4L6.1 16.8c-.9-1.2-1.4-2.7-1.4-4.3zm7.3 7.3c-1.6 0-3-.5-4.2-1.4L17.9 8.3c.9 1.2 1.4 2.6 1.4 4.2 0 4-3.3 7.3-7.3 7.3z"></path></svg> 
                    <h1>Bloquear</h1>
                </div>

                <div className='ops' id='denunciar'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M14.091 4.2H6.318c-.691 0-1.295.432-1.555 1.036l-2.591 6.132c-.086.173-.172.346-.172.605V13.7c0 .95.777 1.727 1.727 1.727h5.441L8.305 19.4v.259c0 .345.173.691.345.95l.95.864 5.7-5.7c.345-.345.518-.777.518-1.209V5.927c0-.95-.777-1.727-1.727-1.727zm3.454 0v10.364H21V4.2h-3.455z" id="thumb-down"></path></svg>
                    <h1> Denunciar contato</h1>
                </div>

                <div className='ops' id='apagar' onClick={()=>setIsDeleteActive(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6H6v12zM19 3h-3.5l-1-1h-5l-1 1H5v2h14V3z"></path></svg>
                    <h1>Apagar conversa</h1>
                </div>

            </div>

            
        </div>
        </>
    )
}

export default ContactDetails