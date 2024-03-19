
import '../Navbar/Navbarstyle.css'
import {ItemsDetail} from './Navbardetail.jsx'
import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const Navbar = () => {
  /* *******buton event ******* */
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  /* *************dark mode************* */
  const { ToggleChangeMode , theme} = useContext(ThemeContext);
  return (
    <>
      
        <nav className='navbar'>
          <h1 className='nav-logo'>Mona Sa<i className="fa-solid fa-wifi"></i></h1>
      
          <div className='menu-icon' onClick={handleClick}>
            <i className={isActive ? "fas fa-regular fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
      
          <ul className={isActive ? "nav-menu active" : "nav-menu"}>
            {ItemsDetail.map((item , index) =>{
              return(
                <li key={index}>
                  <a className={item.className} href={item.url}><i className={item.icon}></i>{item.title}</a>
                </li>
                )
            })}
            <button onClick={ToggleChangeMode}><i className={theme == "dark" ? "fa-solid fa-sun icon1" : "fa-regular fa-moon icon"}></i></button>
          </ul>
        </nav>
    </>
  )

  
}

export default Navbar















