import React, { useState } from 'react';
import style from './Users.module.scss';
import User from "./User/User";
import Loading from '../../common/Loading';


const Users = (props) => {
  let usersElements = props.usersData.map(user => <User
    id={ user.id }
    followed={ user.followed }
    name={ user.name }
    location={ user.location }
    photo={ user.photos.small }
    getFollow={ props.getFollow }
    getUnfollow={ props.getUnfollow }
    followingProgress={ props.followingProgress }
  />);

  let pagesCount = Math.ceil(props.totalUsers / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / props.portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * props.portionSize + 1;
  let rightPortionNumber = portionNumber * props.portionSize ;

  return (
    <div className={ style.users }>
      <div className={ style.users__container }>
        <div className={ style.users__find }>
          <div className={ style.users__text }>
            Find users: { props.totalUsers }
          </div>
        </div>
        { props.isFetching
          ? <Loading/>
          :
          <>
            <div className={ style.users__nav }>
              {portionNumber > 1 &&
              <span onClick={ () => {setPortionNumber(portionNumber - 1)} }>Back</span>}

              {
                pages
                  .filter(page => (page >= leftPortionNumber && page <= rightPortionNumber))
                  .map(page => {
                    return <span className={ props.currentPage === page && style.active } key={page} onClick={() => {props.onPageChanged(page)}}>{page}</span>
                  })
              }

              {portionNumber < portionCount &&
              <span onClick={ () => {setPortionNumber(portionNumber + 1)} }>Forward</span>}
            </div>
            { usersElements }
          </>
        }
      </div>
    </div>
  );
};

export default Users;