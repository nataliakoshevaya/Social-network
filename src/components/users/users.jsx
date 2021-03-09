import style from './users.module.css';
import userPhoto from '../../assets/img/userImg1.png';
import Preloader from '../common/preloader';


const Users = (props) => {
        const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

        let pages = [];
        for (let i = 1; i <= 30; i++) {
            pages.push(i)
        }

        let page = pages.map(p => {
            return (
                <span 
                className={props.currentPage === p && style.activePage}
                onClick={() => props.onPageChanged(p)}
                >{p}</span>
            )
        })

        let UserCardItem = props.users.map(u => {
            return (
                <div className={style.userCard} key={u.id}>
                    <div>
                        <img className={style.img} src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" />
                    </div>
                    <div className={style.userTitle}>{u.name}</div>
                    {/* <div>
                        <span>
                            {"u.location.country"}
                        </span>
                        <span>
                            {"u.location.city"}
                        </span>
                    </div> */}
                    <div>
                        {(u.followed === true) ?
                            <button onClick={() => props.unFollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className={style.container}>
                    <div className={style.pageNum}>
                        {page}
                    </div>
                    {props.isFetching ? <Preloader /> : null}
                    {UserCardItem}
                </div>
            </div>
        )
}

export default Users;