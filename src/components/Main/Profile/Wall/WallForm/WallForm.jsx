import React from 'react';
import style from './WallForm.module.scss';
import { Field, reduxForm } from "redux-form";
import { Input } from "../../../../common/FormControls";
import { maxLengthCreator, required } from "../../../../../untils/validators/validators";

const maxLength = maxLengthCreator(20);

const WallForm = (props) => {
  return (
    <div className={ style.whats }>
      <form onSubmit={props.handleSubmit}>
        <div className={ style.whats__input }>
          <Field name="post" component={Input} validate={[required, maxLength]} type="text" placeholder={ "Whats new?" } />
        </div>
        <div className={ style.whats__btn }>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

const PostReduxForm = reduxForm({ form: 'message' })(WallForm);

export default PostReduxForm;