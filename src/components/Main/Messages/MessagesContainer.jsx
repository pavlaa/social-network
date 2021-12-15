import React from 'react';
import { connect } from "react-redux";
import { sendMessage} from "../../../redux/messages-reducer";
import Messages from "./Messages";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
    friendsData: state.messagesPage.friendsData
  }
};

export default compose(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(Messages);