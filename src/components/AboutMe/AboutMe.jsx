/* import React from 'react' */
import '../AboutMe/AboutMestyle.css'
const AboutMe = () => {
  return (
    <div className='aboutme'>
      <div className='aboutline'><h1>ABOUT ME</h1><div className='line'></div></div>
      <p className='about-p'>I am engineer Mona Saleh. I studied my primary stage at the Martyr Salim Saadat School, then I moved on to study the middle and secondary stage at Ghaleb Marbiya School. I graduated with a grade that made me qualified to enter the university stage. I began my academic years at the University of Damascus, Department of Communications and Electronics Engineering, and graduated after 5 years with a good grade, then I began training in the field  Front-End at Vica Web Solution.
      </p>
      <h2>What I do!</h2>
      <div className='down'>
        <div className='developer'>
          <p><h3><i class="fa-solid fa-code"></i>Web Development</h3>
            As a developer, I find myself most 
                captivated by the power and flexibility of 
                React.Js . I'm always eager to dive into new
                projects that leverage React.Js and 
                discover innovative ways to create fast, 
                scalable, and user-friendly applications.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe