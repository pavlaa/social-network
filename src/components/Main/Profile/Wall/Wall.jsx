import React from 'react';
import style from './Wall.module.scss';

import Post from '../Post/Post';
import PostReduxForm from "./WallForm/WallForm";


const Wall = ({ postData, userProfile, sendNewPost }) => {
  let postElements = postData.map( post => <Post name={userProfile.fullName} message={post.message} photo={userProfile.photos.small} /> );

  const addNewPost = (post) => {
    sendNewPost(post.post);
  }

  return (
    <div className={ style.wall }>
      <PostReduxForm onSubmit={addNewPost}/>
      { postElements }
    </div>
  );
};

export default Wall; 