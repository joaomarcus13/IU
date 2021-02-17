
import './novaConversa.css'
import Input from '../input/input'
import ItemConversa from '../itemconversa/itemconversa'
import imgtest from '../../assets/images/imgtest.webp'
import NewGroupIcon from '../../assets/images/new-group.png'

function NovaConversa() {


    function voltarConversa() {
        const element = document.querySelector('.tela-novaconversa')

        element.classList.add('voltar')
        setTimeout(() => {
            element.classList.remove('voltar')
            element.style.display = 'none'
        }, 1000);


    }

    return (
        <div className='tela-novaconversa'>
            <div className='tela-novaconversa-head'>
                <a className='icon-voltar' onClick={voltarConversa}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path></svg>
                </a>
                <h1>Nova Conversa</h1>


            </div>

            <div className="tela-novaconversa-body">
                <Input index={1} placeholder='pesquisar contatos'></Input>
                <ul>
                    <ItemConversa img={NewGroupIcon} name='Novo Grupo' nameBottom=' '></ItemConversa>
                    <div className='contatos-frequentes' >
                        <div className='contatos-frequentes-space'> </div>
                        <div className='contatos-frequentes-nome' >
                            <span>CONTATOS FREQUENTES</span>
                        </div>
                    </div>
                    <ItemConversa img={imgtest} name='blabla' nameBottom='status'></ItemConversa>
                    <ItemConversa img={imgtest} name='blabla' nameBottom='status'></ItemConversa>
                    <ItemConversa img={imgtest} name='blabla' nameBottom='status'></ItemConversa>
                    <ItemConversa img={imgtest} name='blabla' nameBottom='status'></ItemConversa>
                    <ItemConversa img={imgtest} name='blabla' nameBottom='status'></ItemConversa>
                    <ItemConversa img={imgtest} name='blabla' nameBottom='status'></ItemConversa>
                    <ItemConversa img={imgtest} name='blabla' nameBottom='status'></ItemConversa>
                    <ItemConversa img={imgtest} name='blabla' nameBottom='status'></ItemConversa>
                    <ItemConversa img={imgtest} name='blabla' nameBottom='status'></ItemConversa>
                    <ItemConversa img={imgtest} name='blabla' nameBottom='status'></ItemConversa>
                    <ItemConversa img={imgtest} name='blabla' nameBottom='status'></ItemConversa>

                </ul>
            </div>





        </div>
    )
}


export default NovaConversa