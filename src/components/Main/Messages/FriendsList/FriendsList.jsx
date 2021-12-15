import React from 'react';
import style from './FriendsList.module.scss';
import Friend from "../Friend/Friend";

const FriendsList = (props) => {

  let friendsElements = props.friendsData.map(friend => <Friend name={friend.name} id={friend.id} photo={friend.photo}/>);

  return (
    <div className={ style.friendsList }>
      <div className={ style.friendsList__search }>
        <input placeholder="Search friend" type="text" />
      </div>
      {friendsElements}
    </div>
  );
};

export default FriendsList;