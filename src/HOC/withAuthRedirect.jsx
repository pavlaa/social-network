import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsRedirect = (state) => ({
  isLogin: state.auth.isLogin
});

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isLogin) return <Redirect to='/login'/>;
    return <Component {...props} />;
  }

  const ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);
  return ConnectAuthRedirectComponent;
}

