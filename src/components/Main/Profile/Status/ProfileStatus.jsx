import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {

  let [editMode, changeEditMode] = useState(false)
  let [status, changeStatus] = useState(props.userStatus)

  useEffect(() => {
    changeStatus(props.userStatus);
  }, [props.userStatus]);

  const activeEditMode = () => {
    changeEditMode(true);
  }

  const deactivateEditMode = () => {
    changeEditMode(false);
    props.updateUserStatus(status);
  }

  const onStatusChange = (e) => {
    changeStatus(e.currentTarget.value)
  }

  return (
    <div>
      { editMode &&
      <input onChange={ onStatusChange } autoFocus={ true } onBlur={ deactivateEditMode }
             value={ status } type="text"/> }
      { !editMode && <span onClick={ activeEditMode }>{ props.userStatus || '-' }</span> }
    </div>
  );
}

export default ProfileStatus;