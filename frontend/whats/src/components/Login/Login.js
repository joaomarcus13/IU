import { useContext, useState } from 'react'
import Context from '../../context'
import firebase from '../../config/api'
import './Login.css'
import imgUser from '../../assets/images/7189bwar9pdx.jpg'
import logoWhats from '../../assets/icons/logoWhats.svg'
import addFoto from '../../assets/icons/addfoto.svg'
import camera from '../../assets/icons/camera.svg'


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

        let phoneNumber = `+55${document.getElementById('phone').value}`
      
        setPhone(phoneNumber)
        //setPhone('+11212345678')
        const appVerifier = window.recaptchaVerifier;
        console.log(phoneNumber)

        const barra = document.querySelector('.span')
        barra.style.width = '100%'

        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log('confirmado')
            phoneNumber = ''

            setCodigo(true)
            barra.style.width = '0%'
            barra.style.transition = ' width 0s'

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
            status: status ?? 'Olá !'
        })
        setUser({ id: userId, img: imgUser, name: name, status: status ?? 'Disponível' })
        console.log('conta criada')
    }

    function openImage() {

    }

    return (
        <div className='login'>

            <div className='login-header'>
                <div className='login-header-icon'>
                    <img src={logoWhats} alt="logo-whats" />
                    <span>WHATS</span>
                </div>
            </div>
            <div className='login-container'>
                <form onSubmit={handleLogin} >

                    {cadastro ? <>
                        <h1>Cadastro</h1>
                        <div className='adft'>
                            <img src={addFoto} alt=""/>
                            <input type="file" id="imgUser"  ></input>
                            <label htmlFor="imgUser">
                                <img src={camera} alt=""/>
                                <span>add foto</span>
                            </label>
                            <span>Forneca seu nome, foto e status para o seu perfil.</span>

                        </div>
                        <input type="text" placeholder='Nome' id='name' autoComplete='off' />
                        <input type="text" placeholder='Status' id='status' autoComplete='off' />
                        <button type='button' onClick={createUser}>Entrar</button>
                    </> :
                        <>

                            {codigo ?

                                <> <h1>Código</h1>
                                    <div>
                                        <p>digite o código de seis dígitos</p>
                                        <input type="text" placeholder='- - -  - - -' id='codigo' ></input>
                                    </div>
                                    <button type='button' onClick={validCode} id='codigo'>Entrar</button>
                                    <p>Reenviar código </p>
                                </> :
                                <> <h1>Login</h1>
                                    <div>
                                        <p>O whats enviará um SMS para verificar o seu numero de telefone </p>
                                        <div className="input-phone">
                                            <input type="text" disabled value='+55'  />
                                            <input type="text" placeholder='Seu número' id='phone' ></input>
                                        </div>

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