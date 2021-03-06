
import './novaConversa.css'
import Input from '../input/input'
import ItemConversa from '../itemconversa/itemconversa'
import imgtest from '../../assets/images/imgtest.png'
import imgUser from '../../assets/images/7189bwar9pdx.jpg'
import NewGroupIcon from '../../assets/images/new-group.png'
import HeadBack from '../headBack/headBack'
import { useContext, useEffect } from 'react'
import Context from '../../context'
import firebase from '../../config/api'


function NovaConversa({open,close}) {

    const { contatos, setContatos, user, conversas, setConversas, chatactive, setChatactive } = useContext(Context)

    function seExiste(id){
        for (var i in conversas){
            if (conversas[i].idUserChat == id){
                console.log('ja existe')
                return true
            }
        }
        return false    
    }
    

    async function adicionarConversa(e) {
        /* console.log(user.chats[0].idChat)
        console.log(e.chats[0].idChat)
        console.log(typeof e.chats) */

        if (!seExiste(e.id)){
            let chat = null
            let conversasUserIds = null
            let conversasOutroIds = null
            let boo = false

        

            if (user.chats && e.chats) {
                conversasUserIds = user.chats.map(x => x.idChat)
                conversasOutroIds = e.chats.map(x => x.idChat)
                console.log(user.chats)
                console.log(e.chats) 
                boo = conversasUserIds.filter(x => conversasOutroIds.includes(x))
            
            }
            
            if (boo.length==0 || boo == false) {
            
                chat = await firebase.firestore().collection('conversas').add({
                    mensagens: [],
                    users: [user.id, e.id]
                })

                seExiste(e.id)

                console.log('chat criado', chat.id)
                console.log(chat)

                const conversa = {
                        idChat: chat.id,
                        name: e.name,
                        img: imgtest,
                        idUserChat: e.id,
                        msg:'',
                        hora:Date.now()
                }
                conversas.push(conversa)
                console.log(chat.id)
                setChatactive(conversa)
                

                firebase.firestore().collection('users').doc(user.id).update({
                    chats: firebase.firestore.FieldValue.arrayUnion({
                        idChat: chat.id,
                        name: e.name,
                        img: imgtest,
                        idUserChat: e.id,
                        msg:'',
                        hora:Date.now()
                    })
                })


                firebase.firestore().collection('users').doc(e.id).update({
                    chats: firebase.firestore.FieldValue.arrayUnion({
                        idChat: chat.id,
                        name: user.name,
                        img: imgUser,
                        idUserChat: user.id,
                        msg:'',
                        hora:Date.now()
                    })
                })

            }
        }else{
            setChatactive(e)
        }
        back('novaconversa')
        
    }


    function back(classe) {
        /* const element = document.querySelector('.tela-novaconversa')
        element.classList.remove('open') */
        let obj = { ...open }
        obj[classe] = false
        close(obj)

    }
    


    useEffect(() => {
        let contacts = []
        async function getContacts() {
            /* console.log('getcontacts') */
            const res = await firebase.firestore().collection('users').get()

            res.forEach(e => {
                if (e.id !== user.id) {
                    contacts.push({
                        id: e.id,
                        img: imgtest,
                        name: e.data().name,
                        status: e.data().status,
                        chats: e.data().chats
                    })
                }
            })
            setContatos(contacts)
        }

        getContacts()


    }, [chatactive])

    return (
        <div className={`tela-novaconversa ${open.novaconversa?'open':''}`}>

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
                            status={e.status}>
                        </ItemConversa>)
                    }


                </ul>
            </div>
        </div>
    )
}


export default NovaConversa