
import './itemconversa.css'

function ItemConversa({active,onClick,id,img,name,msgPrev,status}) {

    return (
        <li className={`item-conversa ${active?'active':''}`}  onClick={onClick}>
            <div className='img-chat'>
                <img src={img} alt="" />
            </div>
            <div className='perfil-chat' >

                <div className='nome-chat'>
                    <h1>{name}</h1>
                    <span>{msgPrev || status}</span>
                </div>
                <span className='hora-chat'>
                    23:40</span>
            </div>


        </li>
    )
}

export default ItemConversa