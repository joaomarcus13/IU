//import * as firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import imgtest from '../assets/images/imgtest.png'
import imgUser from '../assets/images/7189bwar9pdx.jpg'

const firebaseConfig = {
    apiKey: "AIzaSyDYghYuMnOabQSx2Nhz1MAwGKyhj-Ne7ew",
    authDomain: "whats-acdbe.firebaseapp.com",
    projectId: "whats-acdbe",
    storageBucket: "whats-acdbe.appspot.com",
    messagingSenderId: "117760083877",
    appId: "1:117760083877:web:d293835fc37f1fa6f78a4c",
    measurementId: "G-1V2YKVGMF3"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);


}

function ifExists(id, conversas) {
    for (let i in conversas) {
        if (conversas[i].idUserChat === id) {
            console.log('ja existe')
            return true
        }
    }
    return false
}



export const api = {


    signIn: function (phone, appVerifier, setPhone, setCodigo, setProgressBar) {
        firebase.auth().signInWithPhoneNumber(phone, appVerifier).then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log('confirmado')

            //setPhone('')

            setCodigo(true)

            setProgressBar(false)

        }).catch((error) => {
            console.log(error)
        });
    },


    verifyUserToLogin: function (user, setUser, setConversas, setCadastro, setUserId, setSpinner, lastSeen) {
        firebase.firestore().collection('users').doc(user.uid).get().then((doc) => {
            if (doc.exists) {
                firebase.firestore().collection('users').doc(user.uid).update({
                    lastSeen:'online'
                })
                console.log("Document data:", doc.data());
                setUser({
                    id: user.uid,
                    img: imgUser,
                    name: doc.data().name,
                    status: doc.data().status,
                    phone: doc.data().phone,
                })
                setConversas(doc.data().chats)
            } else {
                setCadastro(true)
                setSpinner(false)
                setUserId(user.uid)
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

        
    },


    createAccount: function (userId, phone, inputName, inputStatus, lastSeen) {
        firebase.firestore().collection('users').doc(userId).set({
            phone: phone,
            name: inputName,
            status: inputStatus,
            lastSeen,
            chats: []
        })
    },


    getContacts: async function (user, setContatos) {
        let contacts = []
        const res = await firebase.firestore().collection('users').get()

        res.forEach(e => {
            if (e.id !== user.id) {
                contacts.push({
                    id: e.id,
                    img: imgtest,
                    name: e.data().name,
                    status: e.data().status,
                    chats: e.data().chats,
                    phone: e.data().phone,
                    lastSeen: e.data().lastSeen

                })
            }
        })
        setContatos(contacts)

    },


    getConversas: function (user, setConversas) {
        firebase.firestore().collection('users').doc(user.id).onSnapshot((doc) => {
            if (doc.exists) {
                if (doc.data().chats != null) {
                    setConversas(doc.data().chats)

                }
            }
        })
    },


    addConversa: async function (user, conversas, setChatactive, clickedChat) {
        //console.log('user',user)
        //console.log('other',clickedChat)
        if (!ifExists(clickedChat.id, conversas)) {
            let chat = null

            chat = await firebase.firestore().collection('conversas').add({
                mensagens: [],
                users: [user.id, clickedChat.id]
            })
            const conversa = {
                idChat: chat.id,
                name: clickedChat.name,
                img: imgtest,
                idUserChat: clickedChat.id,
                msg: '',
                hora: Date.now(),
                phone: clickedChat.phone,
                lastDelete: Date.now()
            }
            conversas.push(conversa)
            console.log(conversa)

            setChatactive(conversa)


            firebase.firestore().collection('users').doc(user.id).update({
                chats: firebase.firestore.FieldValue.arrayUnion(conversa)
            })


            firebase.firestore().collection('users').doc(clickedChat.id).update({
                chats: firebase.firestore.FieldValue.arrayUnion({
                    idChat: chat.id,
                    name: user.name,
                    img: imgUser,
                    idUserChat: user.id,
                    msg: '',
                    hora: Date.now(),
                    phone: user.phone,
                    lastDelete: Date.now()
                })
            })

        } else {
            setChatactive(clickedChat)
        }
    },


    getMessages: async function (chatactive, scrollRef, handleSetMsgs, setUsersInChat) {
        let timeDelete = chatactive.lastDelete

        firebase.firestore().collection('conversas').doc(chatactive.idChat).onSnapshot(docs => {
            if (docs.exists) {

                let msgs = docs.data().mensagens.filter(e => e.hora >= timeDelete)
                handleSetMsgs(msgs)
                setUsersInChat(docs.data().users)

                if (scrollRef.current != null)
                    if (scrollRef.current.scrollHeight > scrollRef.current.offsetHeight) {
                        scrollRef.current.scrollTop = scrollRef.current.scrollHeight - scrollRef.current.offsetHeight
                    }
            }
        })
    },



    sendMessage: async function (user, users, chatactive, msg, inputRef, setMsg) {
        //console.log(chatactive)
        firebase.firestore().collection('conversas').doc(chatactive.idChat).update({
            mensagens: firebase.firestore.FieldValue.arrayUnion({
                emissor: user.id,
                text: msg,
                hora: Date.now(),
            })
        })
        setMsg('')
        inputRef.current.focus()

        for (let i of users) {
            let cts = await firebase.firestore().collection('users').doc(i).get()
            let chats = [...cts.data().chats]
            for (let j of chats) {
                if (j.idChat === chatactive.idChat) {
                    j.msg = msg
                    j.hora = Date.now()

                }
            }
            await firebase.firestore().collection('users').doc(i).update({
                chats
            })
        }
    },



    deleteChat: async function (conversas, chatactive, user) {


        let cts = await firebase.firestore().collection('users').doc(user.id).get()

        let chats = [...cts.data().chats]
        for (let j of chats) {
            if (j.idChat === chatactive.idChat) {
                j.msg = ''
                j.lastDelete = Date.now()

            }
        }

        await firebase.firestore().collection('users').doc(user.id).update({
            chats
        })

    },

    getChatActiveUser: async function (chatactive, setChatactiveUser) {
        //console.log('chatativo',chatactive)
        //let doc = await 
        firebase.firestore().collection('users').doc(chatactive.idUserChat).onSnapshot(doc=>{
            //console.log('doc',doc.data())
            setChatactiveUser(doc.data().lastSeen)
        })

        

    } ,


    closeApp:function(user){
        firebase.firestore().collection('users').doc(user.id).update({
            lastSeen:Date.now()
        })
    }

}

export default firebase




