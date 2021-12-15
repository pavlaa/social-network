import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.scss';
import Menu from './components/Main/Menu/Menu';
import MessagesContainer from "./components/Main/Messages/MessagesContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Main/Users/UsersContainer";
import ProfileContainer from "./components/Main/Profile/ProfileContainer";
import LoginContainer from "./components/Main/Login/LoginContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeAppThunkCreator } from "./redux/app-reducer";
import Loading from "./components/common/Loading";
import SettingsContainer from "./components/Main/Settings/SettingsContainer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Loading />
    }
    return (
      <div className="wrapper">
        <HeaderContainer/>
        <div className="main">
          <Menu/>
          <Route path="/profile/:id?" component={ ProfileContainer }/>
          <Route path="/messages" component={ MessagesContainer }/>
          <Route path="/users" component={ UsersContainer }/>
          <Route path="/settings" component={ SettingsContainer }/>
          <Route path="/login" component={ LoginContainer }/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp: initializeAppThunkCreator})
)(App);
