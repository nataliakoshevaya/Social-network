import style from './users.module.css';

const Users = (props) => {
       if(props.users.length === 0) {
        props.setUsers( [
            {
                id: 1,
                name: 'Alex',
                followed: true,
                img: 'https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg&ga=GA1.2.1212857596.1613779200',
                location: {country: 'Ukraine', city: 'Kharkiv'},
                status: 'im lokking for job'
            },
            {
                id: 2,
                name: 'Nata',
                followed: false,
                img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
                location: {country: 'USA', city: 'New York'},
                status: 'im free to help you'
            },
            {
                id: 3,
                name: 'Mike',
                followed: true,
                img: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
                location: {country: 'Ukraine', city: 'Kiev'},
                status: 'i like footbal'
            }
           ]
       )
       }
 
    
    let UserCardItem = props.users.map(u => {
        debugger
        return (
            <div className={style.userCard} key={u.id}>
                <div>
                    <img className={style.img} src={u.img} alt="avatar" />
                </div>
                <div className={style.userTitle}>{u.name}</div>
                <div>
                    <span>
                        {u.location.country}
                    </span>
                    <span>
                        {u.location.city}
                    </span>
                </div>
                <div>
                    {(u.followed === true) ?
                        <button onClick={() => props.unFollow(u.id)}>Unfollow</button> :
                        <button onClick={() => props.follow(u.id)}>Follow</button>}
                </div>
            </div>
        )
    })

    return (
        <div className={style.container}>
            {UserCardItem}
        </div>
    )
}

export default Users;
