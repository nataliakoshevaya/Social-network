import style from './login.module.css';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}> 
            <div>
                <Field name="email" component="input" type="text" placeholder="Login" />
            </div>
            <div>
                <Field name="password" component="input" type="password" placeholder="Password" />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />  Remember me
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

let LoginReduxFrom = reduxForm({ form: 'Login' })(LoginForm);

const Login = (props) => {
    const onSubmit=(formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return  <Redirect to="/profile" />
    }
    return (
        <div className={style.wrapper}>
            <h1>Login</h1>
            <LoginReduxFrom onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProp = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProp, {login})(Login);