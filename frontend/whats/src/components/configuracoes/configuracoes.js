
import './configuracoes.css'

import HeadBack from '../headBack/headBack'
import { useContext } from 'react'
import Context from '../../context'

function Configuracoes({open,close}) {

    const {user} = useContext(Context) 

    return (
        <div className={`tela-configuracoes ${open.configuracoes?'open':''}`}>

            <HeadBack classe='configuracoes' text='Configurações' close={close}></HeadBack>

            <div className="tela-configuracoes-body">
                <div className='tela-configuracoes-perfil'>
                    <img src={user.img} alt="perfil" />
                    <div className="tela-configuracoes-perfil-nome">
                        <h1>{user.name}</h1>
                        <span>{user.status}</span>
                    </div>
                </div>

                <ul className='tela-configuracoes-lista'>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 21.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.8 1.7 1.7 1.7zm5.6-5.2v-4.7c0-2.7-1.8-4.8-4.3-5.4v-.6c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v.6c-2.5.6-4.3 2.7-4.3 5.4v4.7l-1.7 1.7v.9h14.6v-.9l-1.7-1.7z"></path></svg>
                        <span>Notificações</span>
                    </li>
                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1l3.22 3.22h4.56v4.56L23 12l-3.22 3.22v4.56h-4.56L12 23l-3.22-3.22H4.22v-4.56L1 12l3.22-3.22V4.22h4.56L12 1zm0 5v12c3.31 0 6-2.69 6-6a6.005 6.005 0 0 0-5.775-5.996L12 6z" fill="currentColor"></path></svg>
                        <span>Tema</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M4.9 5.9h6.4V4.1H4.9c-1 0-1.8.8-1.8 1.8v6.4h1.8V5.9zm5.3 8l-3.6 4.4h10.7l-2.7-3.6-1.8 2.4-2.6-3.2zm6.2-4c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3.6 1.3 1.3 1.3 1.3-.6 1.3-1.3zm2.7-5.8h-6.4v1.8h6.4v6.4h1.8V5.9c0-1-.8-1.8-1.8-1.8zm0 16h-6.4v1.8h6.4c1 0 1.8-.8 1.8-1.8v-6.4h-1.8v6.4zM4.9 13.7H3.1v6.4c0 1 .8 1.8 1.8 1.8h6.4v-1.8H4.9v-6.4z"></path></svg>
                        <span>Papel de parede da conversa</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 2.8c-5.3 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7 9.7-4.3 9.7-9.7-4.4-9.7-9.7-9.7zm-7.3 9.7c0-4 3.3-7.3 7.3-7.3 1.6 0 3.1.5 4.3 1.4L6.1 16.8c-.9-1.2-1.4-2.7-1.4-4.3zm7.3 7.3c-1.6 0-3-.5-4.2-1.4L17.9 8.3c.9 1.2 1.4 2.6 1.4 4.2 0 4-3.3 7.3-7.3 7.3z"></path></svg>
                        <span>Bloqueados</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 4.7c-4.5 0-8.2 3.7-8.2 8.2s3.7 8.2 8.2 8.2 8.2-3.7 8.2-8.2-3.7-8.2-8.2-8.2zm.8 13.9h-1.6V17h1.6v1.6zm1.7-6.3l-.7.7c-.7.6-1 1.1-1 2.3h-1.6v-.4c0-.9.3-1.7 1-2.3l1-1.1c.3-.2.5-.7.5-1.1 0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6H8.7c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3c0 .8-.4 1.4-.8 1.9z"></path></svg>
                        <span>Ajuda</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}


export default Configuracoes