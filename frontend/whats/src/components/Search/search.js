import './search.css'
import React, { useEffect } from 'react';
import Input from '../input/input'

function Pesquisar() {

  function handleClose() {

    const main = document.querySelector('.area-main')
    const areaMsg = document.querySelector('.search-msg')
    const aside = document.querySelector('.aside')
      
    aside.style.width = '30%'
    areaMsg.style.animation = 'close-search-msg 100ms'
    main.style.width = '70%'
    areaMsg.style.visibility = 'hidden'

  }

  function toggleIcon() {
    const iconSearch = document.querySelector('.icon-search-input')
    const iconBack = document.querySelector('.icon-back')

    iconSearch.style.display = 'none'
    iconBack.style.display = 'flex'
  }



  return (
    <div className='search-msg'>

      <div className='header'>
        <svg onClick={handleClose} className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path></svg>
        <div className='pesq-msg'>Pesquisar mensagens</div>
      </div>

          <Input index={2} placeholder='Pesquisar...'></Input>
    

      <div className='result-search'>
        <div className='label'> Pesquisar mensagens com Gonçalo </div>
      </div>

    </div>
  )
}


export default Pesquisar