
import './itemconversa.css'
import imgtest from '../../assets/images/imgtest.webp'


function ItemConversa({active,onClick,id,img,name,msgPrev}) {

    function handleActiveChat(e) {
        const li = document.querySelectorAll('.item-conversa')
        for (let i of li) {
            i.classList.remove('active')
        }
        
        console.log(e.target)
        e.target.classList.add('active')

    }

    return (
        <li className={`item-conversa ${active?'active':''}`}  onClick={onClick}>
            <div className='img-chat'>
                <img src={img} alt="" />
            </div>
            <div className='perfil-chat' >

                <div className='nome-chat'>
                    <h1>{name}</h1>
                    <span>{msgPrev}</span>
                </div>
                <span className='hora-chat'>
                    23:40</span>
            </div>


        </li>
    )
}

export default ItemConversa