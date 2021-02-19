import style from './message.module.css';



const Message = (props) => {
    return (
      <div className={ (props.user === "user") ? style.messageBlock : style.messageBlockLeft}>
          <img className="avatar" src={props.img} alt="avatar"/>
          <div className={style.message} >
            {props.message}
          </div>
      </div>
    )
 }

 export default Message;