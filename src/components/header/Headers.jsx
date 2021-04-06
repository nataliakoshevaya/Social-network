import { NavLink } from 'react-router-dom';
import './Header.css'
import style from './header.module.css'

const Headers = (props) => {
    debugger
    return (
        <header className="header">
            <div className="container">
                <div className={style.wrapper}>
                    <NavLink to='/profile'>
                        <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo" />
                    </NavLink>

                    <div className={style.loginBlock}>
                        {props.isAuth ? 
                        <div>{props.login} <button onClick={props.logout}>Log Out</button></div> :
                            <NavLink to='/login'>
                                Log In
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Headers;