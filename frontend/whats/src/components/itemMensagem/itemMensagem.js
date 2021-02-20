
import './itemMensagem.css'

function ItemMensagem({text,emissor,user}) {
  return (
    <div className='mensagem' 
    style={{justifyContent:user.id===emissor?'flex-end':'flex-start'}}>
        <div className='mensagem-item' style={{backgroundColor:user.id===emissor?'var(--verde)':'var(--head)'}}>
            <div className={user.id===emissor?'triangulo-l':'triangulo-r'}></div>
            <div className='mensagem-text'>{text}</div>
            <div className="mensagem-hora">10:10</div>
        </div>

    </div>
  )
}


export default ItemMensagem