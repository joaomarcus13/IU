
import './itemMensagem.css'

function ItemMensagem({ text, emissor, hora, user }) {

  let horaMsg = new Date(hora).getHours()
  let minutoMsg = String(new Date(hora).getMinutes()).padStart(2, '0')

  return (
    <div className='mensagem'
      style={{ justifyContent: user.id === emissor ? 'flex-end' : 'flex-start' }}>
      <div className='mensagem-item' style={{ backgroundColor: user.id === emissor ? 'var(--verde)' : 'var(--head)' }}>
        <div className={user.id === emissor ? 'triangulo-l' : 'triangulo-r'}></div>
        <div className='mensagem-text'>{text}</div>
        <div className="mensagem-hora">{horaMsg}:{minutoMsg}</div>
      </div>

    </div>
  )
}


export default ItemMensagem