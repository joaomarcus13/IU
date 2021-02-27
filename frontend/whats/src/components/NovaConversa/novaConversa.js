
import './novaConversa.css'
import Input from '../input/input'
import ItemConversa from '../itemconversa/itemconversa'

import NewGroupIcon from '../../assets/images/new-group.png'
import HeadBack from '../headBack/headBack'
import { useContext } from 'react'
import Context from '../../context'

function NovaConversa() {

    const {contatos} = useContext(Context)



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
                    {
                        contatos.map((e, k) => <ItemConversa
                            key={k}
                            img={e.img}
                            name={e.name}
                            status={e.status}>
                        </ItemConversa>)
                    }


                </ul>
            </div>





        </div>
    )
}


export default NovaConversa