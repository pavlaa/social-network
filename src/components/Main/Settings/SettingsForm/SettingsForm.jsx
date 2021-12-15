import React from 'react';
import style from './SettingsForm.module.scss';
import facebook from '../../../../img/icon/fb.png';
import vk from '../../../../img/icon/vk.png';
import twitter from '../../../../img/icon/twitter.png';
import instagram from '../../../../img/icon/insta.png';
import youtube from '../../../../img/icon/youtube.png';
import github from '../../../../img/icon/github.png';
import website from '../../../../img/icon/website.png';
import { Field, reduxForm } from "redux-form";

const SettingsForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={ style.info }>
        <div className={ style.info__name }>
          <span>Full Name:</span>
          <Field name="fullName" component="input" type="text" placeholder="New name"/>
        </div>
        <div className={ style.info__about }>
          <span>About me:</span>
          <Field name="aboutMe" component="textarea" type="text" placeholder="About me"/>
        </div>
        <div className={ style.info__contacts }>
          <span>Contacts:</span>
          <div className={ style.info__social }>
            <div className={ style.info__item }>
              <img src={ facebook } alt="facebook"/>
              <Field name="contacts.facebook" component="input" type="text" placeholder="Link with https://"/>
            </div>
            <div className={ style.info__item }>
              <img src={ vk } alt="vk"/>
              <Field name="contacts.vk" component="input" type="text" placeholder="Link with https://"/>
            </div>
            <div className={ style.info__item }>
              <img src={ twitter } alt="twitter"/>
              <Field name="contacts.twitter" component="input" type="text" placeholder="Link with https://"/>
            </div>
            <div className={ style.info__item }>
              <img src={ instagram } alt="instagram"/>
              <Field name="contacts.instagram" component="input" type="text" placeholder="Link with https://"/>
            </div>
            <div className={ style.info__item }>
              <img src={ youtube } alt="youtube"/>
              <Field name="contacts.youtube" component="input" type="text" placeholder="Link with https://"/>
            </div>
            <div className={ style.info__item }>
              <img src={ github } alt="github"/>
              <Field name="contacts.github" component="input" type="text" placeholder="Link with https://"/>
            </div>
            <div className={ style.info__item }>
              <img src={ website } alt="website"/>
              <Field name="contacts.website" component="input" type="text" placeholder="Link with https://"/>
            </div>
          </div>
        </div>
        <div className={ style.info__job }>
          <span>Looking for a job:</span>
          <Field name="lookingForAJob" component="input" type="checkbox"/>
        </div>
        <div className={ style.info__skills }>
          <span>My skills:</span>
          <Field name="lookingForAJobDescription" component="textarea" type="text" placeholder="My skills"/>
        </div>
        { props.error &&
        <div className={ style.form__summaryError }>
          <span>{ props.error }</span>
        </div>
        }
        <div className={ style.info__button }>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

const SettingsProfileReduxForm = reduxForm({ form: 'profileInfo' })(SettingsForm)

export default SettingsProfileReduxForm;