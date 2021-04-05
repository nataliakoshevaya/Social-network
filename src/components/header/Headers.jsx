import { NavLink } from 'react-router-dom';
import './Header.css'
import style from './header.module.css'

const Headers = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className={style.wrapper}>
                    <NavLink to='/profile'>
                        <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo" />
                    </NavLink>


                    <div className={style.loginBlock}>
                        {props.isAuth ? props.login :
                            <NavLink to='/login'>
                                Login
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Headers;