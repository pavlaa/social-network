import React from 'react';
import style from './ChatForm.module.scss';
import { Field, reduxForm } from "redux-form";
import { required } from "../../../../untils/validators/validators";


const ChatForm = (props) => {

  return (
    <div className={ style.chatInput }>
      <form onSubmit={props.handleSubmit} className={ style.chatInput__form }>
        <div className={ style.chatInput__textarea }>
          <Field name="message" component="textarea" placeholder="Write your message" validate={[required]} />
        </div>
        <div className={ style.chatInput__button }>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

const ChatReduxForm = reduxForm({form: 'chat'})(ChatForm)

export default ChatReduxForm;