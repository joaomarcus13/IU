import React, { useState, useEffect } from 'react';
import './aside.css'
import imgtest from '../../assets/images/imgtest.webp'
import Perfil from '../Perfil/perfil'


function Aside() {

    function toggleIc() {
        const iconLupa = document.querySelector('.search-aside-icon')
        const iconVoltar = document.querySelector('.search-aside-back')
        iconLupa.style.display = 'block'
        iconVoltar.style.display = 'none'
    }

    function handle(e) {
        if (e.target.id !== 'input-aside') {
            toggleIc()
        }

    }

    useEffect(() => {
        document.addEventListener('click', handle)
    }, [])

    function handleOptions() {
        console.log('option')
        const divoption = document.querySelector('.icon-options-whats')
        const options = document.querySelector('.options-whats')
        const optChat = document.querySelector('.options-chat')

        options.style.display =
            options.style.display === 'block' ? 'none' : 'block'
        
        divoption.classList.toggle('bg-icon-click')

        if (optChat.style.display === 'block') {
            optChat.style.display = 'none'
        }
    }

    function handleActiveChat(e) {
        const li = document.querySelectorAll('.chat-msgs ul li')
        for (let i of li) {
            i.classList.remove('active')
        }

        e.target.classList.add('active')
    }

    function handlePerfilInfo() {
        const perfil = document.querySelector('.tela-perfil')
        perfil.style.display = 'block'

    }

    function toggleIcon() {
        const iconLupa = document.querySelector('.search-aside-icon')
        const iconVoltar = document.querySelector('.search-aside-back')
        iconLupa.style.display = 'none'
        iconVoltar.style.display = 'block'
    }

    return (
        <>
            <aside className='aside'>
                <div className='head-aside'>
                    <div className='img-perfil' >
                        <img onClick={handlePerfilInfo} src={imgtest} alt="" />
                    </div>

                    <div className='icons-aside'>

                        <div className="icon-msgs-whats">
                            <svg id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg></div>

                        <div className="icon-stories-whats">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg></div>

                        <div className="icon-options-whats" onClick={handleOptions}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                        </div>
                    </div>


                    <div className="options-whats">
                        <ul>
                            <li>Novo grupo</li>
                            <li>Criar uma sala</li>
                            <li>Perfil</li>
                            <li>Arquivadas</li>
                            <li> Favoritas</li>
                            <li>Configuracoes</li>
                            <li>Desconectar</li>
                        </ul>
                    </div>




                </div>

                <div className='search-aside'>
                    <span className='search-aside-icon' >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
                    </span>
                    <span className='search-aside-back'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path></svg>
                    </span>
                    <input type='text' onFocus={toggleIcon} id='input-aside' placeholder='Pesquisar ou começar uma nova conversa'>

                    </input>
                </div>

                <div className='chat-msgs'>
                    <ul>
                        <li className='active' onClick={(e) => { handleActiveChat(e) }}>
                            <div className='img-chat'>
                                <img src={imgtest} alt="" />
                            </div>
                            <div className='perfil-chat' >

                                <div className='nome-chat'>
                                    <h1>Goncalo</h1>
                                    <span>beleza</span>
                                </div>
                                <span className='hora-chat'>
                                    23:40</span>
                            </div>


                        </li>

                        <li onClick={(e) => { handleActiveChat(e) }}>
                            <div className='img-chat'>
                                <img src={imgtest} alt="" />
                            </div>
                            <div className='perfil-chat' >

                                <div className='nome-chat'>
                                    <h1>Goncalo</h1>
                                    <span>beleza</span>
                                </div>
                                <span className='hora-chat'>
                                    23:40</span>
                            </div>


                        </li>

                        <li onClick={(e) => { handleActiveChat(e) }}>
                            <div className='img-chat'>
                                <img src={imgtest} alt="" />
                            </div>
                            <div className='perfil-chat' >

                                <div className='nome-chat'>
                                    <h1>Goncalo</h1>
                                    <span>beleza</span>
                                </div>
                                <span className='hora-chat'>
                                    23:40</span>
                            </div>


                        </li>

                        <li onClick={(e) => { handleActiveChat(e) }}>
                            <div className='img-chat'>
                                <img src={imgtest} alt="" />
                            </div>
                            <div className='perfil-chat' >

                                <div className='nome-chat'>
                                    <h1>Goncalo</h1>
                                    <span>beleza</span>
                                </div>
                                <span className='hora-chat'>
                                    23:40</span>
                            </div>


                        </li>

                    </ul>
                </div>

            </aside>
            <Perfil></Perfil>
        </>
    )

}


export default Aside