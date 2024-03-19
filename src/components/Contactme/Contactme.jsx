import '../Contactme/Contactmestyle.css'

const Contactme = () => {
  return (
    <div className='contactme'>
        <div className='aboutline'><h1>Contact</h1><div className='line'></div></div>
        <div className="talkme">
          <div className='phone'>
            <p>Phone : +963 959929155</p>
            <a href="https://wa.me/qr/JQR5SJVUZEKJA1"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
          </div>
          <div className="phone">
            <p>UserName : @mona18sa</p>
            <a href="https://t.me/mona18sa"><i class="fa-brands fa-telegram"></i> Telegram</a>
          </div>
          <div className="phone">
            <p>Email : Eng.Mona20sa@gmail.com</p>
            <a href="http://eng.mona20sa@gmail.com"><i class="fa-solid fa-envelope"></i> Email</a>
          </div>
        </div>
        <form action="#" className='form'>
          <p>I'm always open to discussing product
             design work or partnerships.</p>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder='Email' />
          <input className='input3' type="text" placeholder='Message'/>
          
        </form>
        <a href="#" className='send'><i class="fa-solid fa-paper-plane"></i> Send Message</a>
        
    </div>
  )
}

export default Contactme