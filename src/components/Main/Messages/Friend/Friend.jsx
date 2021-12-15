import React from 'react';
import style from "./Friend.module.scss";
import {NavLink} from "react-router-dom";

const Friend = (props) => {
  return (
    <NavLink to={`/messages/${props.id}`}>
      <div className={ style.friend }>
        <div className={ style.friend__photo }>
          <img src={props.photo} alt="photo-friend-message"/>
        </div>
        <div className={ style.friend__name }>{props.name}</div>
      </div>
    </NavLink>
  );
};

export default Friend;