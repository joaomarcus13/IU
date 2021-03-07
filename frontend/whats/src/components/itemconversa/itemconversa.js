
import './itemconversa.css'

function ItemConversa({ active, onClick, id, img, name, msgPrev, hora, status }) {


    let horaChat = new Date(hora).getHours()
    let minutoChat = String(new Date(hora).getMinutes()).padStart(2, '0')


    return (
        <li className={`item-conversa ${active ? 'active' : ''}`} onClick={onClick}>
            <div className='img-chat'>
                <img src={img} alt="" />
            </div>
            <div className='perfil-chat' >

                <div className='nome-chat'>
                    <h1>{name}</h1>
                    <span>{msgPrev || status}</span>
                </div>
                <span className='hora-chat'>
                    {horaChat ? horaChat + ':' + minutoChat : ''}
                </span>
            </div>


        </li>
    )
}

export default ItemConversa