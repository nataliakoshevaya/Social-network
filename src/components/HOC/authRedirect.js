import React, {Component} from 'react';
import { connect } from 'react-redux';
import {  Redirect } from "react-router";

let mapStateToPropForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Components) => {
    class RedirectComponent extends Component {
        render() {
            if (this.props.isAuth === false) return <Redirect to = {'/login'} />

            return <Components {...this.props} />
        }
    } 

   let ConnectAuthRedirectComponent = connect(mapStateToPropForRedirect)(RedirectComponent)

   return ConnectAuthRedirectComponent;
}