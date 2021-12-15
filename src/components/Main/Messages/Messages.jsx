import React from 'react';
import style from './Messages.module.scss';
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatBody from "./ChatBody/ChatBody";
import FriendsList from "./FriendsList/FriendsList";
import ChatReduxForm from "./ChatForm/ChatForm";

const Messages = (props) => {

  let addNewMessage = (messageText) => {
    props.sendMessage(messageText.message);
  };

  return (
    <div className={ style.messages }>
      <div className={ style.messages__container }>
        <div className={ style.chat }>
          <ChatHeader/>
          <ChatBody messagesData={ props.messagesData }/>
          <ChatReduxForm onSubmit={ addNewMessage } newMessageText={ props.newMessageText }
                         onSendMessage={ props.onSendMessage }
                         onChangeTextMessage={ props.onChangeTextMessage }/>
        </div>
        <FriendsList friendsData={ props.friendsData }/>
      </div>
    </div>
  );
};

export default Messages;