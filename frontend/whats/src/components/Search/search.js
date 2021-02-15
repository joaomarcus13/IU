import './search.css'
import '../../App'


function Pesquisar() {

  function handleClose() {
    const container = document.querySelector('.container')
    const areaMsg = document.querySelector('.search-msg')

    
    areaMsg.style.animation = 'close-search-msg 100ms'
    container.style.animation = 'close-search 100ms'
    
    
    container.style.width = '100%'
    areaMsg.style.display = 'none'

  }

  return (
    <div className='search-msg'>

      <div className='header'>
        <svg onClick={handleClose} className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path></svg>
        <div className='pesq-msg'>Pesquisar mensagens</div>
      </div>

      <div className='div-search-input'>
        <div className='search-input'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="29" height="29"><path fill="currentColor" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
          <input placeholder='Pesquisar...'></input>
        </div>
      </div>

      <div className='result-search'>
        <div className='label'> Pesquisar mensagens com Gonçalo </div>
      </div>

    </div>
  )
}


export default Pesquisar