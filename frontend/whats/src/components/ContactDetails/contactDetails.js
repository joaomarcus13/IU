import './contactDetails.css'
import imgtest from '../../assets/images/imgtest.webp'

function ContactDetails(){

    function handleClose() {
        const container = document.querySelector('.container')
        const contactDetails = document.querySelector('.contact-details')
    
        contactDetails.style.animation = 'close-search-msg 100ms'
        container.style.animation = 'close-search 100ms'
        
        container.style.width = '100%'
        contactDetails.style.visibility = 'hidden'
    
      }

    return(
        <div className='contact-details'>
            <div className='header'>
                <svg onClick={handleClose} className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path></svg>
                <div className='label'>Dados do contato</div>
            </div>
            
            <div className='scroll'>
                <div className='imgPerfil'>
                    <img className='img' src={imgtest}></img>
                    <div className='telefone'>32224002</div>

                </div>

            </div>

        </div>

    )
}

export default ContactDetails