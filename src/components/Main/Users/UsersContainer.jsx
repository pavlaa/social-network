import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, setCurrentPage, setUsers, setIsFetching, setFollowingProgress, pageChangedThunkCreator, getUsersThunkCreate } from "../../../redux/users-reducer";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.usersData.length);
  }

  onPageChanged = (page) => {
    if (page > 0) {
      this.props.pageChanged(page, this.props.pageSize);
    }
  }

  render() {
    return (
      <Users
        usersData={ this.props.usersData }
        pageSize={ this.props.pageSize }
        totalUsers={ this.props.totalUsers }
        currentPage={ this.props.currentPage }
        onPageChanged={ this.onPageChanged }
        getFollow={ this.props.getFollow }
        getUnfollow={ this.props.getUnfollow }
        isFetching={ this.props.isFetching }
        setIsFetching={ this.props.setIsFetching }
        followingProgress={ this.props.followingProgress }
        setFollowingProgress={ this.props.setFollowingProgress }
        portionSize={ this.props.portionSize }
      />
    )
  }
}

let mapStateToProps = (state) => ({
  usersData: state.usersPage.usersData,
  pageSize: state.usersPage.pageSize,
  totalUsers: state.usersPage.totalUsers,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingProgress: state.usersPage.followingProgress,
  portionSize: state.usersPage.portionSize,
});

export default compose(
  connect(mapStateToProps, {
    getFollow: follow,
    getUnfollow: unfollow,
    setUsers,
    setCurrentPage,
    setIsFetching,
    getUsers: getUsersThunkCreate,
    setFollowingProgress,
    pageChanged: pageChangedThunkCreator
  }),
  withAuthRedirect)(UsersContainer);
