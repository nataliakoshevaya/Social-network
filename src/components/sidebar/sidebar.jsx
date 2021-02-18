import FriendItem from './friendItem/friendItem';
import Navbar from './navbar/Navbar';
import style from './sidebar.module.css';


const Sidebar = (props) => {

    let friendEl = props.friends.map((f) => {
        return <FriendItem name={f.name} img={f.img}/>
    });
    
    return (
        <div className={style.sidebar}>
            <Navbar />
            <div className={style.friends}>
                <div className={style.friendsTitle}>My Friends</div>
                <div className={style.friendsWrapper}>
                    {friendEl}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;