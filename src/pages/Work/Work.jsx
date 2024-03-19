
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import '../Work/Workstyle.css'
import Workproject from "../../components/Workproject/Workproject";
const Work = () => {
  return (
    <>
    <Navbar />
    <div className="componentFlex">
        <About/>
        <Workproject />
    </div>
    </>
  )
}

export default Work