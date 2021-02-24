import { connect } from "react-redux";
import { followAC, setUserAC, unFollowAC } from "../../redux/users-reducer";
import Users from "./users";

let mapStateToProp = (state) => {
    return {
        users: state.users
    }
}

let mapDispatchToProp = () => {
     return {
         folow: (dispatch) => {
            dispatch(followAC());
         },
         unFolow: (dispatch) => {
            dispatch(unFollowAC);
         },

         setUsers: (dispatch) => {
            dispatch(setUserAC);
         }
     }
}

let UserContainer = connect(mapStateToProp, mapDispatchToProp)(Users);

export default UserContainer;