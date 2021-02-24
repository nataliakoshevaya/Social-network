import { connect } from 'react-redux';
import FriendItem from './friendItem/friendItem';
import Navbar from './navbar/Navbar';
import style from './sidebar.module.css';

const Sidebar = (props) => {
        let friendEl = props.sidebar.friends.map((f) => {
            return <FriendItem id={f.id} name={f.name} img={f.img} key={f.id}/>
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

let mapStateToProp = (state) => {
    return {
        sidebar: state.sidebar
    }
}

const SidbarContainer = connect(mapStateToProp)(Sidebar);

export default SidbarContainer;