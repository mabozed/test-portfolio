
import About from "../../components/About/About";
import AboutMe from "../../components/AboutMe/AboutMe";
import Navbar from "../../components/Navbar/Navbar";
import './Homestyle.css';
const Home = (props) => {
  return (
    <>
    <div>
      <Navbar />
      <div className="componentFlex">
        <About/>
        <AboutMe/>
      </div>
    </div>
    </>
  );
};
export default Home;