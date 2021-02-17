import style from'./Navbar.module.css';

// import { far } from '@fortawesome/free-regular-svg-icons'
import { faUser, faStickyNote,  faEnvelope, faMusic, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return(
     
      <nav className={style.nav}>
      <div className={style.navTitle}>Menu</div>
        <div className={style.navItem}>
        <FontAwesomeIcon className={style.navIcon} icon={faUser} />
            <a href="#">Profile </a>
        </div>
        <div className={style.navItem}>
        <FontAwesomeIcon className={style.navIcon} icon={faEnvelope} />
            <a href="#">Messages</a>
        </div>
        <div className={style.navItem}>
        <FontAwesomeIcon className={style.navIcon} icon={faStickyNote} />
            <a href="#">News</a>
        </div>
        <div className={style.navItem}>
        <FontAwesomeIcon className={style.navIcon} icon={faMusic} />
            <a href="#">Music</a>
        </div>
        <div  className={style.navItem}>
        <FontAwesomeIcon className={style.navIcon} icon={faCog} />
            <a href="#">Settings</a>
        </div>
        </nav>
    
    )
}

export default Navbar;