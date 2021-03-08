import './search.css'
import React, { useContext } from 'react';
import Input from '../input/input'
import Context from '../../context';

export default function Pesquisar({isSearchActive, setIsSearchActive}) {

  const {setIsRightOpen} = useContext(Context)

  return (
    <div className={`search-msg ${isSearchActive? 'search-msg-open': ''}`}>

      <div className='header'>
        <svg onClick={() => {setIsSearchActive(false); setIsRightOpen(false)}} className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path></svg>
        <div className='pesq-msg'>Pesquisar mensagens</div>
      </div>

          <Input index={2} placeholder='Pesquisar...'></Input>
    
      <div className='result-search'>
        <div className='label'> Pesquisar mensagens com Gonçalo </div>
      </div>

    </div>
  )
}