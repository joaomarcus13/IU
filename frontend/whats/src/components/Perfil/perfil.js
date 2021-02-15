
import './perfil.css'
import imgtest from '../../assets/images/imgtest.webp'

function Perfil() {


    function voltarPerfil() {
        const perfil = document.querySelector('.tela-perfil')
      
        perfil.style.display = 'none'

    }

    return (
        <div className='tela-perfil'>
            <div className='tela-perfil-head'>
                <a className='icon-voltar' onClick={voltarPerfil}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path></svg>
                </a>
                <h1>Perfil</h1>
            </div>
            <div className='tela-perfil-body'>
                <div className='tela-perfil-img'>
                    <img src={imgtest} alt="" />
                </div>
                
                <div className='div-tela-perfil'>

                    <div className='tela-perfil-nome'>
                        <div className='nome-green'>Nome</div>
                        <div className='nome-icone'>
                            <h1>gayssalo</h1>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"></path></svg>
                            </span>
                        </div>

                    </div>

                    <div className='tela-perfil-nome'>
                        <div className='nome-green'>Recado</div>
                        <div className="nome-icone">
                            <h1>Disponivel</h1>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"></path></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Perfil