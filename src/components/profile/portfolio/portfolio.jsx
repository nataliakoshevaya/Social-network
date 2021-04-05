import { NavLink, Redirect, Route } from 'react-router-dom';
import Preloader from '../../common/preloader';
import style from './portfolio.module.css';
import ProfileStatus from './ProfileStatus';

const PortfolioInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    let contacts = props.profile.contacts
  
    let list = Object.entries(contacts).map(([key, value]) => {
        while(value) {
            return(
           
                <div key={key}>
                    <NavLink to={value}> {value} </NavLink>
                </div>
            )
        }
        
    })

    return(
        <>
            <li>
                <img src={props.profile.photos.large} alt="avatar"/>
            </li>
            <li>Name: {props.profile.fullName}</li>
            <li>About me: {props.profile.aboutMe}</li>
            <li>Contacts: {list}</li>
            {(props.profile.lookingForAJob === true) ? 
                     <li>
                         <span>Looking for a job</span>
                         <span>{props.profile.lookingForAJobDescription}</span>
                    </li> 
                    : null}

                
        </>
    )
};

const Portfolio = (props) => {
    return (
        <div className={style.portfolio}>
            <div className={style.portfolioTitle}>My page </div>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            <ul className={style.protfolioItem}>
                <PortfolioInfo profile={props.profile}/>
            </ul>
        </div>
    );
}

export default Portfolio;