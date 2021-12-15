import React from 'react';
import style from './Settings.module.scss';
import SettingsProfileReduxForm from "./SettingsForm/SettingsForm";

const Settings = (props) => {

  const onSubmit = (formData) => {
    props.saveProfileInfo(formData);
  }

  return (
    <div className={ style.settings }>
      <div className={ style.settings__container }>
        <SettingsProfileReduxForm initialValues={props.userProfile} onSubmit={ onSubmit } />
      </div>
    </div>
  );
};

export default Settings;