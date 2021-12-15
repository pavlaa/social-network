import React from 'react';
import style from "./Message.module.scss";

const Message = (props) => {
  return (
    <div className={ style.message }>
      <div className={ style.message__info }>
        <div className={ style.message__photo }>
          <img
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="photo-user-message"/>
        </div>
        <div className={ style.message__user }>
          <div className={ style.message__name }>{ props.name }</div>
          <div className={ style.message__date }>{ props.date }</div>
        </div>
      </div>
      <div className={ style.message__text }>
        { props.message }
      </div>
    </div>
  );
};

export default Message;