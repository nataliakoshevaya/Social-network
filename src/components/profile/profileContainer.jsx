import { Component } from 'react';
import { connect } from 'react-redux';
import { userProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import Profile from './Profile'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../HOC/authRedirect';
import { compose } from 'redux';
import store from '../../redux/redux-store';

class ProfileAPIContainer extends Component {
    componentDidMount() {
        let userId =  this.props.match.params.userId;
        
        if(!userId) {
            userId = 15875
        };
        
        this.props.userProfile(userId);
        this.props.getUserStatus(userId);
    }

    
    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
    }
};

console.log(store.getState())



let mapStateToProp = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProp, {userProfile, getUserStatus, updateUserStatus} ),
    withRouter,
    withAuthRedirect
    )(ProfileAPIContainer);