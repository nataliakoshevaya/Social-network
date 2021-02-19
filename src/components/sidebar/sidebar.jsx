import FriendItem from './friendItem/friendItem';
import Navbar from './navbar/Navbar';
import style from './sidebar.module.css';


const Sidebar = (props) => {
    
    // let onMouseOver = (e) => {
    //     console.log(e.target.img)
    // }

    let friendEl = props.friends.map((f) => {
        return <FriendItem id={f.id} name={f.name} img={f.img}/>
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