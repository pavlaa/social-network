import React from 'react';
import style from './User.module.scss';
import userPhoto from '../../../../img/user.svg';
import { NavLink } from "react-router-dom";

const User = (props) => {
  let follow = () => {
    props.getFollow(props.id);
  }

  let unFollow = () => {
    props.getUnfollow(props.id);
  }

  return (
    <div className={ style.user }>
      <NavLink to={ '/profile/' + props.id}>
        <div className={ style.user__info }>
          <div className={ style.user__photo }>
            <img src={ (props.photo !== null) ? props.photo : userPhoto } alt="user-photo"/>
          </div>
          <div className={ style.user__descr }>
            <div className={ style.user__fullname }>
              { props.name }
            </div>
            <div className={ style.user__location }>
              Location: { "props.location.country" }, { "props.location.city" }
            </div>
          </div>
        </div>
      </NavLink>
      { props.followed ?
        <button disabled={props.followingProgress.some(id => id === props.id)} onClick={unFollow} className={ `${ style.user__btn } ${ style.follow }`}>
          <div className={ style.user__text }>Unfollow</div>
        </button>
        :
        <button disabled={props.followingProgress.some(id => id === props.id)} onClick={follow} className={ style.user__btn }>
          <div className={ style.user__text }>Follow</div>
        </button>
      }
    </div>
  );
};

export default User;