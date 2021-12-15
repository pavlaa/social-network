import React from 'react';
import { connect } from "react-redux";
import Login from "./Login";
import { getLoginProfileThunkCreator } from "../../../redux/auth-reducer";

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { getLoginProfile: getLoginProfileThunkCreator })(Login);