import React from 'react';
import style from './Loading.module.scss';
import loading from "../../img/icon/loading.svg";

const Loading = (props) => {
  return (
    <div className={ style.loading }>
      <img src={loading} alt="loading"/>
    </div>
  );
};

export default Loading;