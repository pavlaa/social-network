import React from 'react';
import style from './Post.module.scss';
import userSmall from '../../../../img/user.svg';

const Post = (props) => {
  return (
    <div className={style.post}>
      <div className={style.post__user}>
        <div className={style.post__photo}>
          <img src={props.photo ? props.photo : userSmall} alt="photo-user" />
        </div>
        <div className={style.post__info}>
          <div className={style.post__name}>{props.name}</div>
          <div className={style.post__date}>17 Nov 16:13 </div>
        </div>
      </div>
      <div className={style.post__text}>{props.message}</div>
    </div>
  );
};

export default Post;