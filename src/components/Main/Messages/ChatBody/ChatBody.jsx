import React from 'react';
import style from './ChatBody.module.scss';
import Message from "../Message/Message";

const ChatBody = ({ messagesData }) => {

  let messagesElements = messagesData.map(message => <Message name={ message.name } date={ message.date }
                                                              message={ message.message }/>);

  return (
    <div className={ style.chatBody }>
      { messagesElements }
    </div>
  );
};

export default ChatBody;