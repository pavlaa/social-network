import React from 'react';
import style from './Header.module.scss';

import logo from './../../img/logo.png';
import { NavLink } from "react-router-dom";
import userSmall from '../../img/user.svg';

let Header = ({ logout, isLogin, login, userProfile }) => {

  const onLogout = () => {
    logout();
  }

  return (
    <header className={ style.header }>
      <div className={ style.header__container }>
        <div className={ style.header__logo }>
          <img src={ logo } alt={ "logo" }/>
          <span>pogly</span>
        </div>
        <div className={ style.header__login }>
          { isLogin
            ?
            <>
              <img src={!userProfile ? userSmall : userProfile.photos.small} alt=""/>
              <span>{ login }</span>
              <button className={style.header__logout} onClick={ onLogout }>Logout</button>
            </>
            :
            <NavLink to="/login">
              <button className={style.header__logout} >Login</button>
            </NavLink>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;