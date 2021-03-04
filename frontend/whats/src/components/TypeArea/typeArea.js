import './typeArea.css'
import IconsClip from '../IconsClip/iconsClip'
import firebase from '../../config/api'
import { useContext, useEffect, useRef, useState } from 'react'
import Context from '../../context'
import IconEmoji from '../../assets/icons/iconEmoji'
import IconAnexar from '../../assets/icons/iconAnexar'

function TypeArea() {

    const { user, chatactive } = useContext(Context)
    const { conversas, setConversas } = useContext(Context)
    //const {msg,setMsg} = useContext(Context)
    const [isSend, setIsSend] = useState(false)
    const [msg, setMsg] = useState('')
    const inputRef = useRef()

    function handleChange(e) {
        e.target.value ? setIsSend(true) : setIsSend(false)
        setMsg(e.target.value)
    }

    async function enviar() {

        firebase.firestore().collection('conversas').doc(chatactive.idChat).update({
            mensagens: firebase.firestore.FieldValue.arrayUnion({
                emissor: user.id,
                text: msg,
                hora: Date.now()
            })
        })

        setMsg('')
        inputRef.current.focus()

    }

    function gravar() {
        console.log('gravando')
    }

    function handleIconsClip() {
        const icons = document.querySelector('.icons-clip')
        const icon = document.querySelectorAll('.icon')

        if (icons.style.visibility === 'visible') {
            for (let i of icon) {
                i.style.animation = 'close-icons-clip 300ms'
            }
            icons.style.visibility = 'hidden'
        } else {
            for (let i of icon) {
                i.style.animation = 'iconAni 700ms'
            }
            icons.style.visibility = 'visible'
        }
    }

    function handleEnter(e) {
        if (e.key === 'Enter') {
            enviar()
            setIsSend(false)
        }
    }

    return (
        <div className='type-area'>

            <div className='type-area-icons'>
                <IconEmoji></IconEmoji>
                <IconsClip ></IconsClip>
                <IconAnexar onclick={handleIconsClip}></IconAnexar>
            </div>


            <form className='type-area-form'>
                <input className='input' ref={inputRef} value={msg} onChange={(e) => { handleChange(e) }} type="text" id='campo' autoComplete='off' placeholder="Digite uma mensagem" onKeyPress={handleEnter} />


                <button disabled className='icon-microfone' style={{ display: isSend ? 'none' : 'flex' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg></button>

                <button type='button' onClick={enviar} className='icon-enviar' style={{ display: isSend ? 'flex' : 'none' }} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
                </button>
            </form>

        </div>
    )

}


export default TypeArea