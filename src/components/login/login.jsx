import style from './login.module.css';
// import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router';
import {  Formik, Form, Field } from 'formik';
import {Input, StyledLoginForm, CheckBoxWrapper} from './loginstyled'



function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
}

function validatePassword(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (value.length <= 8) {
      error = 'Invalid password. Must be 8 characters or longer';
    }
    return error;
}  


const LoginForm = (props) => (
    <div>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
       
        onSubmit={(values, { setSubmitting }) => {
          props.login(values.email, values.password, values.rememberMe)
          setSubmitting(false);
        }}
      >
        {({ errors, touched, values, isSubmitting }) => (
          <StyledLoginForm>
            <Input type="email" name="email"  placeholder="jane@acme.com" validate={validateEmail}/>
            {errors.email && touched.email && <div>{errors.email}</div>}
            
            <Input type="password" name="password"  placeholder="********" validate={validatePassword}/>
            {errors.password && touched.password && <div>{errors.password}</div>}

            <CheckBoxWrapper>
            <Input type="checkbox" name="rememberMe" /> 
            Remember me
            </CheckBoxWrapper>
 
           
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </StyledLoginForm>
        )}
      </Formik>
    </div>
  );



const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to="/profile" />
    }
    return (
        <div className={style.wrapper}>
            <h1>Login</h1>
            <LoginForm login={props.login} />
        </div>
    )
}

const mapStateToProp = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProp, { login })(Login);