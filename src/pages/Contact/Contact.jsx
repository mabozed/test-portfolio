import '../Contact/Contactstyle.css'
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Contactme from '../../components/Contactme/Contactme';
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="componentFlex">
        <About/>
        <Contactme/>
    </div>
    </>
  )
}

export default Contact