
import './novaConversa.css'
import Input from '../input/input'
import ItemConversa from '../itemconversa/itemconversa'
import imgtest from '../../assets/images/imgtest.webp'
import NewGroupIcon from '../../assets/images/new-group.png'
import HeadBack from '../headBack/headBack'

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

            <HeadBack classe='tela-novaconversa' text='Nova Conversa'></HeadBack>

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