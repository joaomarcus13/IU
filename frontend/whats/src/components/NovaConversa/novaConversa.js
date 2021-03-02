
import './novaConversa.css'
import Input from '../input/input'
import ItemConversa from '../itemconversa/itemconversa'
import imgtest from '../../assets/images/imgtest.png'
import NewGroupIcon from '../../assets/images/new-group.png'
import HeadBack from '../headBack/headBack'
import { useContext, useEffect } from 'react'
import Context from '../../context'
import firebase from '../../config/api'
import userEvent from '@testing-library/user-event'

function NovaConversa() {

    const { contatos, setContatos, user } = useContext(Context)


    function adicionarConversa(
        
    ) {
        
    }


    useEffect(() => {
        let contacts = []
        async function getContacts() {
            const res = await firebase.firestore().collection('users').get()
            console.log(res)
            res.forEach(e => {
                if(e.id !== user.id){
                    contacts.push({
                        id:e.id,
                        img:imgtest,
                        name:e.data().name,
                        status:e.data().status
                    })
                }
            })
            setContatos(contacts)
        }
        
       getContacts()


    }, [])

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
                        Object.values(contatos).map((e) => <ItemConversa
                            onClick={adicionarConversa}
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