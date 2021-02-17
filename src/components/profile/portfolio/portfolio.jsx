import style from './portfolio.module.css'

const Portfolio = () => {
    return (
        <div className={style.profile}>
            <div className={style.profileTitle}>Yor page </div>
            <div className={style.profileImg}>
                <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-girl-avatar-png-image_966352.jpg" alt="avatar" />
            </div>

            <ul className={style.profileItem}>
                <li>Name: Natalia</li>
                <li>Age: 25</li>
                <li>Education: NTU “KhPI”</li>
                <li>Site: <a href="#">linkedin.com</a></li>
            </ul>
        </div>
    );
}

export default Portfolio;