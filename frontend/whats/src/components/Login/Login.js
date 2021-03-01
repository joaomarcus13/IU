import { useContext, useState } from 'react'
import Context from '../../context'
import firebase from '../../config/api'
import './Login.css'
import imgUser from '../../assets/images/7189bwar9pdx.jpg'


function Login() {

    const { setUser } = useContext(Context)

    const [codigo, setCodigo] = useState(false);
    const [cadastro, setCadastro] = useState(false)
    const [userId, setUserId] = useState('')
    const [phone, setPhone] = useState('+11212345678')

    function handleLogin(e) {
        const env = document.querySelector('.login .enviando')
        const form = document.querySelector('.login-container form')

        form.style.animation = 'animation: pass 2s'
        env.style.visibility = 'visible'

        e.preventDefault()
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
            }
        });

        const phoneNumber = document.getElementById('phone')

        setPhone(phoneNumber.value)
        //setPhone('+11212345678')
        const appVerifier = window.recaptchaVerifier;
        console.log(phoneNumber.value)
        
        const barra = document.querySelector('.span')
        barra.style.width = '100%'

        firebase.auth().signInWithPhoneNumber(phoneNumber.value, appVerifier).then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log('confirmado')
            phoneNumber.value = ''

            setCodigo(true)
            barra.style.width = '0%'
            barra.style.transition =' width 0s'

        }).catch((error) => {
            console.log(error)
        });
        
    }

    function validCode() {
        const code = document.getElementById('codigo')
        console.log(code.value)

        window.confirmationResult.confirm(code.value).then((result) => {
            const user = result.user
            console.log(user.uid)
            firebase.firestore().collection('users').doc(user.uid).get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    setUser({ id: user.uid, 
                        img: imgUser, 
                        name: doc.data().name, 
                        status: doc.data().status,
                        conversas: doc.data().conversas,
                        contados:doc.data().contatos})

                } else {
                    setCadastro(true)
                    setUserId(user.uid)
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

        }).catch((error) => {
            console.log(error)
        });
    }

    function createUser() {
        const name = document.getElementById('name').value
        const status = document.getElementById('status').value

        firebase.firestore().collection('users').doc(userId).set({
            phone: phone,
            name: name,
            status: status?? 'Olá !'
        })
        setUser({ id: userId, img: imgUser, name: name, status: status?? 'Olá !' })
        console.log('conta criada')
    }

    function openImage() {
      
    }

    return (
        <div className='login'>

            <div className='login-header'>
                <div className='login-header-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39"><path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path><path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path></svg>
                    <span>WHATS</span>
                </div>
            </div>
            <div className='login-container'>
                <form onSubmit={handleLogin} >

                    {cadastro ? <>
                        <h1>Cadastro</h1>
                        <div className='adft'>
                            <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 60 60" width="55" height="55"><defs><circle id="contact-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle></defs><g clip-path="url(#contact-SVGID_2_)"><path fill="#0795DC" d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"></path><path fill="#0EABF4" d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"></path></g><g fill="#F5F5F5"><path id="svg-contact" d="M26.5 26.5A4.5 4.5 0 0 0 31 22a4.5 4.5 0 0 0-4.5-4.5A4.5 4.5 0 0 0 22 22a4.5 4.5 0 0 0 4.5 4.5zm0 2.25c-3.004 0-9 1.508-9 4.5v1.125c0 .619.506 1.125 1.125 1.125h15.75c.619 0 1.125-.506 1.125-1.125V33.25c0-2.992-5.996-4.5-9-4.5z"></path></g></svg>
                            <input type="file" id ="imgUser" ></input>
        
                        </div>
                        <input type="text" placeholder='Nome' id='name' />
                        <input type="text" placeholder='Status' id='status' />
                        <button type='button' onClick={createUser}>Entrar</button>
                    </> :
                        <>
                            
                            {codigo ?
                            
                                <> <h1>Código</h1>
                                <div>
                                    <p>código de seis dígitos:</p>
                                    <input type="text" placeholder='0 0 0 0 0 0' id='codigo' ></input>
                                </div>
                                    <button type='button' onClick={validCode} id='codigo'>Entrar</button>
                                    <p>Reenviar código </p>
                                </> :
                                <> <h1>Login</h1>
                                <div>
                                    <p>Telefone: </p>
                                    <input type="text" placeholder='+99 99 99999-9999' id='phone' value='+11212345678'></input>
                                    
                                </div>
                                <button type='button' onClick={handleLogin}>Enviar codigo</button>
                                <p className='enviando'>Enviando SMS com o código...</p>
                                </>
                            }
                        </>
                    }
                </form>
                <div className='barra'><span className='span'></span> </div>
            </div>
            <div id='sign-in-button'></div>
        </div>
    )
}

export default Login