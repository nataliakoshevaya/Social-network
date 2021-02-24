import { connect } from "react-redux";
import { followAC, setUserAC, unFollowAC } from "../../redux/users-reducer";
import Users from "./users";

let mapStateToProp = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProp = (dispatch) => {
     return {
         follow: (userID) => {
            dispatch(followAC(userID));
         },
         unFollow: (userID) => {
            dispatch(unFollowAC(userID));
         },

         setUsers: (users) => {
             dispatch(setUserAC(users));
         }
     }
}

let UserContainer = connect(mapStateToProp, mapDispatchToProp)(Users);

export default UserContainer;