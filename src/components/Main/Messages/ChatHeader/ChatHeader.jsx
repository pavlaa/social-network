import React from 'react';
import style from './ChatHeader.module.scss';

const ChatHeader = () => {
  return (
    <div className={style.chatHeader}>
      <div className={style.chatHeader__person}>
        <div className={style.chatHeader__photo}>
          <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="photo-user"/>
        </div>
        <div className={style.chatHeader__name}>Name Surneme</div>
      </div>
    </div>
  );
};

export default ChatHeader;