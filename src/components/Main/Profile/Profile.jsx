import React from 'react';
import style from './Profile.module.scss';
import WallContainer from "./Wall/WallContainer";
import Loading from "../../common/Loading";
import userLarge from '../../../img/user-large.png';
import ProfileStatus from "./Status/ProfileStatus";
import { contactsLinkHelper } from "../../../untils/contacts-link-helper";

const Profile = (props) => {
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length > 0) {
      props.savePhoto(e.target.files[0]);
    }
  }

  if (!props.userProfile) {
    return (
      <div className={ style.profile }>
        <div className={ style.profile__container }>
          <Loading />
        </div>
      </div>
    );
  } else {
    return (
      <div className={ style.profile }>
        <div className={ style.profile__container }>
          <div className={ `${ style.profile__user } ${ style.user }` }>
            <div className={ style.user__img }>
              <img
                src={props.userProfile.photos.large ? props.userProfile.photos.large : userLarge}
                alt="photo-user"/>
              {props.isOwner && <input onChange={onMainPhotoSelected} type='file'/>}
            </div>
            <div className={ style.user__descr }>
              <div className={ style.user__name }>
                {props.userProfile.fullName}
              </div>
              <div className={ style.user__status }>
                <ProfileStatus userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
              </div>
              <div className={ style.user__contacts }>
                {
                  Object.keys(props.userProfile.contacts).map(key => {
                    let result = contactsLinkHelper(props.userProfile.contacts[key], key);
                    return result;
                  })
                }
              </div>
              <div className={ style.user__about }>
                {props.userProfile.aboutMe && <span>About me: {props.userProfile.aboutMe}</span> }
              </div>
              <div className={ style.user__skills }>
                {props.userProfile.lookingForAJobDescription && <span>Skills: {props.userProfile.lookingForAJobDescription}</span>}
              </div>
            </div>
          </div>
          <WallContainer userProfile={props.userProfile}  />
        </div>
      </div>
    );
  }
};

export default Profile;