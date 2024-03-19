
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import  "./Resumestyle.css"
const Resume = () => {
  return (
    <>
    <div >
      <Navbar/>
      <div className="componentFlex">
        <About/>
        <Skills/>
      </div>
    </div>
    </>
  )
}

export default Resume