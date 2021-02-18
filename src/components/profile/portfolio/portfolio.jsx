import style from './portfolio.module.css';

const PortfolioInfo = (props) => {
    return(
        <>
            <li>Name: {props.name}</li>
            <li>Age: {props.age}</li>
            <li>Education: {props.education}</li>
            <li>Site: <a href="#">{props.site}</a></li>
        </>
    )
};

const Portfolio = () => {
    return (
        <div className={style.portfolio}>
            <div className={style.portfolioTitle}>Yor page </div>
            <div className={style.portfolioImg}>
                <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-girl-avatar-png-image_966352.jpg" alt="avatar" />
            </div>

            <ul className={style.protfolioItem}>
                <PortfolioInfo name='Natalia' age='25' education='NTU"KhPI"' site='linkedin.com'/>
            </ul>
        </div>
    );
}

export default Portfolio;