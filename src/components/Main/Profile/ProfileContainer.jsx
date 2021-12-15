import React from 'react';
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfileThunkCreator, getUserStatusThunkCreator, savePhotoThunkCreator, setUserProfile, updateUserStatusThunkCreator } from "../../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let id = this.props.match.params.id;
    if (!id) {
      id = this.props.userId;
    }
    this.props.getUserProfile(id);
    this.props.getUserStatus(id);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.id != prevProps.match.params.id) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile {...this.props} isOwner={!this.props.match.params.id} />
    );
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  userId: state.auth.userId,
  userStatus: state.profilePage.userStatus
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfile: getUserProfileThunkCreator,
    getUserStatus: getUserStatusThunkCreator,
    updateUserStatus: updateUserStatusThunkCreator,
    savePhoto: savePhotoThunkCreator
  }),
  withRouter,
)(ProfileContainer)