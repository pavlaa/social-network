import React from 'react';
import style from './LoginForm.module.scss'
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <div className={ style.form }>
      <form onSubmit={ props.handleSubmit }>
        <div className={ style.form__login }>
          <Field name="email" component="input" type="text" placeholder={ "Login" }/>
        </div>
        <div className={ style.form__password }>
          <Field name="password" component="input" type="password" placeholder={ "Password" }/>
        </div>
        <div className={ style.form__remember }>
          <Field name="rememberMe" component="input" type="checkbox"/>
          <span>remember me</span>
        </div>
        { props.captchaUrl &&
        <>
          <img src={ props.captchaUrl }/>
          <Field name="captcha" component="input" type="text" />
        </>
        }
        { props.error &&
          <div className={ style.form__summaryError }>
            <span>{ props.error }</span>
          </div>
        }
        <div className={ style.form__submit }>
          <button>Sing In</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;