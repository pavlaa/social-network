import React from 'react';
import { connect } from "react-redux";
import Header from "./Header";
import { getLogout } from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.userProfile != prevProps.userProfile){
      console.log('1')
    }
  }

  render() {
    return <Header
      login={ this.props.login }
      isLogin={ this.props.isLogin }
      logout={this.props.logout}
      userProfile={this.props.userProfile}
    />;
  }
}

let mapStateToProps = (state) => {
  return {
    isFetching: state.usersPage.isFetching,
    login: state.auth.login,
    isLogin: state.auth.isLogin,
    userProfile: state.profilePage.userProfile
  };
};

export default connect(mapStateToProps, {
  logout: getLogout
})(HeaderContainer);
