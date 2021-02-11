

import './style.css'

function Main() {
    return (
        <main className='main'>

        <div className = 'message-r'>  
          <div className = 'msg-r'>Sim</div>
          <div className='hora'> 
            10:30 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg>
          </div>
          <div className= 'triangulo-r'></div>        
        </div>

        <div className ='message-l'>
          <div className='triangulo-l'></div>
          <div className = 'msg-l'> mensagem  </div>
          <div className='hora'> 10:32 </div>
        </div>

      </main>
    )
}


export default Main