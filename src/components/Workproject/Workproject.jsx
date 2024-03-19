import '../Workproject/Workprojectstyle.css'

import { Data } from './Workdata.js'
const Workproject = () => {
  return (
    <>
      <div className="work">
        <div className="aboutline">
          <h1>Portfolio</h1>
          <div className="line"></div>
        </div>
        <div className="projects">
          {Data.map((item) => {
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="one">
                  <img src={item.picture} alt="picture" />
                  <p>{item.description}</p>
                </div>
              </a>
            )
          })}
        </div>
        <h1 className="h1">Certificates</h1>
        <div className="certificate">
          <img src="/test-portfolio/images/arduino.jpg" alt="" />
          <img src="/test-portfolio/images/certificate.jpg" alt="" />
          <img src="/test-portfolio/images/hamak.jpg" alt="" />
          <img src="/test-portfolio/images/icdl.jpg" alt="" />
          <img src="/test-portfolio/images/tamayoz.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Workproject
