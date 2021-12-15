import React from 'react';
import style from './FormControls.module.scss';

export const Input = ({input, meta, ...props}) => {
  return (
    <div className={ meta.touched && meta.error && style.formControl}>
      <input {...input} {...props}/>
      {meta.touched && meta.error && <p>{meta.error}</p>}
    </div>
  );
};

/*export const Textarea = ({input, meta, ...props}) => {
  return (
    <div className={ meta.touched && meta.error && style.formControl}>
      <input {...input} {...props}/>
      {meta.touched && meta.error && <p>{meta.error}</p>}
    </div>
  );
};*/
