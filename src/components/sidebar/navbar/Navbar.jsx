import style from './Navbar.module.css';

// import { far } from '@fortawesome/free-regular-svg-icons'
import { faUser, faStickyNote, faEnvelope, faMusic, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
            <nav className={style.nav}>
                <div className={style.navTitle}>Menu</div>
                <div className={style.navItem}>
                    <FontAwesomeIcon className={style.navIcon} icon={faUser} />
                    <NavLink to="/profile" activeClassName={style.active}>Profile </NavLink>
                </div>
                <div className={style.navItem}>
                    <FontAwesomeIcon className={style.navIcon} icon={faEnvelope} />
                    <NavLink to="/dialog" activeClassName={style.active}>Messages</NavLink>
                </div>
                <div className={style.navItem}>
                    <FontAwesomeIcon className={style.navIcon} icon={faStickyNote} />
                    <NavLink to="/news" activeClassName={style.active}>News</NavLink>
                </div>
                <div className={style.navItem}>
                    <FontAwesomeIcon className={style.navIcon} icon={faMusic} />
                    <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
                </div>
                <div className={style.navItem}>
                    <FontAwesomeIcon className={style.navIcon} icon={faCog} />
                    <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
                </div>
            </nav>
    )
}

export default Navbar;