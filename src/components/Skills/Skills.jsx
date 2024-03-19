import { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import './Skillsstyle.css'
const Skills = () => {
  const { ToggleChangeMode, theme } = useContext(ThemeContext)
  return (
    <div className="skills">
      <div className="aboutline">
        <h1>Resume</h1>
        <div className="line"></div>
      </div>
      <div className="container1">
        <h1>
          <i className="fa-solid fa-graduation-cap"></i> Education
        </h1>
        <div className="education">
          <p>2018-2023</p>
          <h3>Communications and Electronics Engineering</h3>
          <p>Damascus University</p>
        </div>
      </div>
      <div className="container2">
        <h1>
          <i class="fa-solid fa-briefcase"></i> Experience
        </h1>
        <div className="about-education">
          <div className="divs">
            <p>2020-present</p>
            <h4>
              Certificate of attendance at a training course in electronic
              control Using Arduino
            </h4>
          </div>
          <div className="divs">
            <p>2020-present</p>
            <h4>Certificate in Fundamentals of Communications Systems</h4>
          </div>
          <div className="divs">
            <p>2018-present</p>
            <h4>Computer driving Certificate</h4>
          </div>
        </div>
      </div>
      <h1 className="h1">Work Skills</h1>
      <div className="workskills">
        <p
          style={
            theme == 'dark' ? { borderColor: '#fff' } : { borderColor: '#000' }
          }
        >
          Web basic (html5/css3/js)
        </p>
        <p
          style={
            theme == 'dark' ? { borderColor: '#fff' } : { borderColor: '#000' }
          }
        >
          Jquery
        </p>
        <p
          style={
            theme == 'dark' ? { borderColor: '#fff' } : { borderColor: '#000' }
          }
        >
          Bootstrap
        </p>
        <p
          style={
            theme == 'dark' ? { borderColor: '#fff' } : { borderColor: '#000' }
          }
        >
          Js Vanilla
        </p>
        <p
          style={
            theme == 'dark' ? { borderColor: '#fff' } : { borderColor: '#000' }
          }
        >
          React Basic
        </p>
        <p
          style={
            theme == 'dark' ? { borderColor: '#fff' } : { borderColor: '#000' }
          }
        >
          React Router
        </p>
        <p
          style={
            theme == 'dark' ? { borderColor: '#fff' } : { borderColor: '#000' }
          }
        >
          React component
        </p>
        <p
          style={
            theme == 'dark' ? { borderColor: '#fff' } : { borderColor: '#000' }
          }
        >
          React hocks
        </p>
      </div>
    </div>
  )
}

export default Skills
