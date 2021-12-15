import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Settings from "./Settings";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { saveProfileInfoThunkCreator } from "../../../redux/profile-reducer";

let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { saveProfileInfo: saveProfileInfoThunkCreator }),
  withRouter
)(Settings)