import { useContext, useEffect, useState } from 'react'
import Context from '../../context'
import firebase, { api } from '../../config/api'
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
    const [phone, setPhone] = useState('')
    const [inputCode, setInputCode] = useState('')
    const [inputName, setInputName] = useState('')
    const [inputStatus, setInputStatus] = useState('Disponível')
    const [progressBar, setProgressBar] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const [errorCode, setErrorCode] = useState(false)
    const { setConversas } = useContext(Context)


    function handleLogin(e) {

        if (phone) {
           
            setProgressBar(true)

            e.preventDefault()
            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
                'size': 'invisible',
                'callback': (response) => {
                }
            });

            console.log(phone)

            const appVerifier = window.recaptchaVerifier;

            api.signIn(phone, appVerifier, setPhone, setCodigo, setProgressBar)

        }
    }

    function validCode(e) {

        if (inputCode) {
            let lastSeen = 'online'
            e.preventDefault()
            setSpinner(true)
            setErrorCode(false)

            console.log(inputCode)

            window.confirmationResult.confirm(inputCode).then((result) => {
                const user = result.user
                console.log(user.uid)

                api.verifyUserToLogin(user, setUser, setConversas, setCadastro, setUserId, setSpinner,lastSeen)


            }).catch((error) => {
                setErrorCode(true)
                console.log(error)
            });

        }
    }


    function createUser() {
        const lastSeen = 'online'
        api.createAccount(userId, phone, inputName, inputStatus,lastSeen)

        setUser({ id: userId, img: imgUser, name: inputName, status: inputStatus, lastSeen })
        console.log('conta criada')
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
                <form className='login-form' >

                    {cadastro ? <>
                        <h1>Cadastro</h1>
                        <div className='adft'>
                            <img src={addFoto} alt="" />
                            <input type="file" id="imgUser"  ></input>
                            <label htmlFor="imgUser">
                                <img src={camera} alt="" />
                                <span>add foto</span>
                            </label>
                            <span>Forneca seu nome, foto e status para o seu perfil.</span>

                        </div>
                        <input type="text" onChange={(e) => { setInputName(e.target.value) }} placeholder='Nome' id='name' autoComplete='off' required />
                        <input type="text" onChange={(e) => { setInputStatus(e.target.value) }} placeholder='Status' id='status' autoComplete='off' />
                        <button type='button' onClick={createUser}>Entrar</button>
                    </> :
                        <>

                            {codigo ?

                                <> <h1>Código</h1>
                                    <div>
                                        <p>digite o código de seis dígitos</p>

                                        <input onChange={e => { setInputCode(e.target.value) }} type="text" placeholder='- - -  - - -' id='codigo' required ></input>

                                    </div>
                                    <button type='button' onClick={validCode} id='codigo'>Entrar</button>
                                    <div className='area-spinner'>
                                        <span style={{ display: errorCode ? 'block' : 'none' }}>Reenviar Código</span>
                                        <div id="spinner" style={{ display: spinner ? 'block' : 'none' }}>
                                        </div>
                                    </div>
                                </> :

                                <> <h1>Login</h1>
                                    <div>
                                        <p>O whats enviará um SMS para verificar o seu numero de telefone </p>
                                        <div className="input-phone">
                                            <input type="text" disabled value='+55' />
                                            <input required onChange={e => { setPhone(`+55${e.target.value}`) }} type="tel" placeholder='Seu número' id='phone'  ></input>
                                        </div>

                                    </div>
                                    <button type='button' onClick={handleLogin}>Enviar código</button>
                                    <p className='enviando' style={{ visibility: progressBar ? 'visible' : 'hidden' }}>Enviando SMS com o código...</p>
                                </>
                            }
                        </>
                    }
                </form>
                <div className='barra' ><span className={progressBar ? 'span' : ''}></span> </div>
            </div>
            <div id='sign-in-button'></div>
        </div>
    )
}

export default Login