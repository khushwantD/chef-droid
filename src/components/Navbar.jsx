import { BsRobot } from 'react-icons/bs'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { IconContext } from 'react-icons/lib'
import { useContext } from 'react';
import { Context } from '../App';

function Navbar() {

  const { isActive, setIsActive } = useContext(Context)

  const toggleActiveClass = () => {
    setIsActive(!isActive)
  }

  const removeActive = () => {
    setIsActive(false)
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#" className="logo-title">
          Chef Droid
        </a>
        <IconContext.Provider value={{ color: "#F8F0E5", size: "2em" }}>
          <BsRobot />
        </IconContext.Provider>
      </div>
      <ul className={`nav-items ${isActive ? "active" : "hidden"}`}>
        <li>
          <a href="#" className="nav-list-item" onClick={removeActive}>
            Solutions
          </a>
        </li>
        <li>
          <a href="#" className="nav-list-item" onClick={removeActive}>
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="nav-list-item" onClick={removeActive}>
            Resources
          </a>
        </li>
        <li>
          <a href="#" className="nav-list-item" onClick={removeActive}>
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="nav-list-item" onClick={removeActive}>
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="nav-list-item" onClick={removeActive}>
            Install
          </a>
        </li>
      </ul>

      <div onClick={toggleActiveClass} className="menuToggler">
        {!isActive ? (
          <RxHamburgerMenu value={{ color: "#F8F0E5", size: "4em" }} />
        ) : (
          <RxCross2 value={{ color: "#F8F0E5", size: "4em" }} />
        )}
      </div>
    </nav>
  );
}

export default Navbar