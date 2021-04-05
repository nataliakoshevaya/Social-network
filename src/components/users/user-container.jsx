import { connect } from "react-redux";
import { follow, setUsers,  unfollow, setPage, setTotalUserCount, toggleIsFetching, toggleFollowingProgress, getUsersThunkCreator } from "../../redux/users-reducer";
import Users from './users';
import React, {Component} from 'react';
import { withAuthRedirect } from "../HOC/authRedirect";
import { compose } from "redux";
class UsersApiContainer extends Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNum) => {
        this.props.getUsersThunkCreator(pageNum, this.props.pageSize);
    }

    render() {
        return ( 
            <Users totalUserCount = {this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       isFetching={this.props.isFetching}
                       toggleFollowingProgress = {this.props.toggleFollowingProgress}
                       followingInProgres={this.props.followingInProgres}
                       isAuth={this.props.isAuth}/>
    
        )
    }
};



let mapStateToProp = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgres: state.usersPage.followingInProgres,
    }
}

export default compose(
    connect(mapStateToProp, {
        follow,  unfollow, setPage, 
        setTotalUserCount, toggleIsFetching, setUsers, 
        toggleFollowingProgress, getUsersThunkCreator
    }),
    withAuthRedirect
    )(UsersApiContainer);

