import preloader from '../../assets/img/loading.svg';
import style from './preloader.module.css';

const Preloader = (props) => {
    return  (
        <div className={style.loaderImg }>
            <img  src={preloader} alt="spinner loader"/>
        </div>
    )
}

export default Preloader;