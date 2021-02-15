
import './itemconversa.css'
import imgtest from '../../assets/images/imgtest.webp'


function ItemConversa(props) {
    return (
        <li className='item-conversa'  onClick={(e) => { props.handleActiveChat(e) }}>
            <div className='img-chat'>
                <img src={props.img} alt="" />
            </div>
            <div className='perfil-chat' >

                <div className='nome-chat'>
                    <h1>{props.name}</h1>
                    <span>{props.nameBottom}</span>
                </div>
                <span className='hora-chat'>
                    23:40</span>
            </div>


        </li>
    )
}

export default ItemConversa