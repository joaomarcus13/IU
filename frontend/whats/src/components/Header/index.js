


import './style.css'
import imgtest from '../../assets/images/imgtest.webp'

function Header() {

  function handleOptions() {
    const options = document.querySelector('.options-chat')
    options.style.display =
      options.style.display === 'block' ? 'none' : 'block'
  }

  return (
    <nav className='header'>

      <div className='info-chat'>
        <div className='img-perfil-chat'>
          <img src={imgtest} alt="" />

        </div>
        <div className='info'>

          <h1>Gonçalo</h1>
          <div className='span'>visto por ultimo hoje as 15:00</div>

        </div>
      </div>

      <div className='icons-chat'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>

        <div className='icon-options-chat' onClick={handleOptions}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
        </div>
      </div>

      <div className='options-chat'>
        <ul>
          <li>
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
          <li>
            Apagar conversa
            </li>

        </ul>
      </div>

    </nav>
  )
}



export default Header