import { useState } from 'react'

function Form() {

  const [text, setText] = useState('');
  const [send, setSend] = useState(false);
  const [blank, setBlank] = useState(false);

  const handleText = (e) => {
    setText(e.target.value);
    setSend(false);
    setBlank(false);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      setSend(true);
      setText('');
      console.log(text);
  }

  const handleBlur = () => {
    if (text.trim().length === 0) {
      setBlank(true);
      setSend(false);
    } else {
      setBlank(false);
    }
  }

  return (
    <>
    <form className='send_form' onSubmit={handleSubmit}>
      <input className={`send_input ${send ? 'sended_class' : ''} ${blank ? 'error' : ''}`} value={text} onChange={handleText} onBlur={handleBlur}/>
      <button className='send_button' type='submit' disabled={text.trim().length === 0 ? true : false}>Отправить</button>
    </form>
    {send && <p className='sended'>Сообщение успешно отправлено</p>}
    {blank && <p className='is-error'>Поле ввода не должно быть пустым</p>}
    </>
  )
}
export default Form;
