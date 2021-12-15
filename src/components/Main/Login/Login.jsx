import React from 'react';
import style from './Login.module.scss'
import LoginReduxForm from "./LoginForm/LoginForm";
import { Redirect } from "react-router-dom";

const Login = (props) => {

  const onSubmit = (formData) => {
    props.getLoginProfile(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.isLogin) {
    return <Redirect to='/profile'/>
  }

  return (
    <div className={ style.login }>
      <div className={ style.login__container }>
        <h2>Sing In</h2>
        <LoginReduxForm onSubmit={ onSubmit } captchaUrl={props.captchaUrl} />
      </div>
    </div>
  );
};

export default Login;