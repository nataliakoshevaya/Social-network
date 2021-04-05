import { Component } from 'react';
import './Header.css'
import Headers from './Headers';
import { connect } from 'react-redux';
import {setAuthUserData, getAuthUserData} from '../../redux/auth-reducer'

class HeaderApiContainer extends Component {
   componentDidMount() {
        //  authUser.getAuthUser()
        //  .then(data => {
        //     if(data.resultCode === 0) {
        //         let {id, login, email} = data.data
        //         this.props.setAuthUserData(id, login, email)
        //     }  
        //  });    
        this.props.getAuthUserData()
    }

   render() {
       return <Headers {...this.props}/>
   }
}

let mapStateToProp = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
})


let HeaderContainer = connect(mapStateToProp, {setAuthUserData, getAuthUserData})(HeaderApiContainer)

export default HeaderContainer;