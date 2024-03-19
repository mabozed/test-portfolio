
import '../About/AboutStyle.css'
const About = () => {
  
  return (
    <>
      <div className='About'>
        <div className='social'>
          <h1>Mona Saleh</h1>
          <p>Front-End Developer</p>
          <a href="https://www.facebook.com/monaalisaleh.79?mibextid=hIlR13"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://t.me/mona18sa"><i class="fa-brands fa-telegram"></i></a>
          <a href="https://github.com/ENG-MonaSaleh"><i class="fa-brands fa-github"></i></a>
        </div>
        <div className='card'>
          <div className='one'>
            <div><i className="fa-solid fa-mobile-screen-button "></i></div>
            <div>
              <p className='p1'>Phone</p>
              <p>+963 959929155</p>
            </div>
          </div>
          <div className='one'>
            <div><i className="fa-regular fa-envelope"></i></div>
            <div>
              <p className='p1'>Email</p>
              <p>Eng.Mona20sa@gmail.com</p>
            </div>
          </div>
          <div className='one'>
            <div><i className="fa-solid fa-location-dot "></i></div>
            <div>
              <p className='p1'>Location</p>
              <p>Syria / Damascus / Judaydat Artuz</p>
            </div>
          </div>
          <a href="https://drive.google.com/file/d/1GTvNXot1ba-QKeNZa6nof_rTPTQQhK4t/view?usp=drivesdk"><i class="fa-solid fa-download"></i> Download Cv</a>
        </div>
      </div>
    </>
  )
}

export default About