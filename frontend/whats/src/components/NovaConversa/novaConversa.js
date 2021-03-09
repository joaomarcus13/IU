
import './novaConversa.css'
import Input from '../input/input'
import ItemConversa from '../itemconversa/itemconversa'

import NewGroupIcon from '../../assets/images/new-group.png'
import HeadBack from '../headBack/headBack'
import { useContext, useEffect } from 'react'
import Context from '../../context'
import { api } from '../../config/api'


function NovaConversa({ open, close }) {

    const { contatos, setContatos, user, conversas, chatactive, setChatactive } = useContext(Context)

    async function adicionarConversa(clickedChat) {
        api.addConversa(user, conversas, setChatactive, clickedChat)
        back('novaconversa')
    }


    function back(classe) {
        let obj = { ...open }
        obj[classe] = false
        close(obj)
    }


    useEffect(() => {

        api.getContacts(user, setContatos)

    }, [chatactive, setContatos, user])

    return (
        <div className={`tela-novaconversa ${open.novaconversa ? 'open' : ''}`}>

            <HeadBack classe='novaconversa' text='Nova Conversa' open={open} close={close}></HeadBack>

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
                        Object.values(contatos).map((e) => <ItemConversa
                            key={e.id}
                            onClick={() => { adicionarConversa(e) }}
                            img={e.img}
                            name={e.name}
                            status={e.status}
                        >
                        </ItemConversa>)
                    }


                </ul>
            </div>
        </div>
    )
}


export default NovaConversa