import React from 'react';

import { sendNewPost } from "../../../../redux/profile-reducer";
import Wall from './Wall';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    userProfile: state.profilePage.userProfile
  }
};

const WallContainer = connect(mapStateToProps, {
  sendNewPost
})(Wall);

export default WallContainer;