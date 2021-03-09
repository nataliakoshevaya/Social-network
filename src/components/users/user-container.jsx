import { connect } from "react-redux";
import { follow, setUsers, unFollow, setPage, setTotalUserCount, toggleIsFetching } from "../../redux/users-reducer";
import Users from './users';
import axios from 'axios';
import React, {Component} from 'react';




class UsersApiContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNum) => {
        this.props.setPage(pageNum);
        this.props.toggleIsFetching(true);
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return ( 
            <Users totalUserCount = {this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       unFollow={this.props.unFollow}
                       follow={this.props.follow}
                       isFetching={this.props.isFetching}/>
    
        )
    }
}

let mapStateToProp = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProp = (dispatch) => {
//      return {
//          follow: (userID) => {
//             dispatch(followAC(userID));
//          },
//          unFollow: (userID) => {
//             dispatch(unFollowAC(userID));
//          },

//          setUsers: (users) => {
//              dispatch(setUserAC(users));
//          },

//          setPage: (page) => {
//              dispatch(setNumOfPageAC(page))
//          },

//          setTotalUserCount: (count) => {
//              dispatch(setTotalUserCountAC(count))
//          },

//          ToggleIsFetching: (toggle) => {
//             dispatch(isFetching(toggle))
//          }
//      }
// }

let UserContainer = connect(mapStateToProp, {
    follow, unFollow, setPage, setTotalUserCount, toggleIsFetching, setUsers
})(UsersApiContainer);

export default UserContainer;