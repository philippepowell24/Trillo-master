import React from "react";

const UserNav = () => (
  <nav className="user-nav">
    <div className="user-nav__icon-box">
      <svg className="user-nav__icon">
        <use xlinkHref="img/sprite.svg#icon-bookmark" />
      </svg>
      <span className="user-nav__notification">7</span>
    </div>
    <div className="user-nav__icon-box">
      <svg className="user-nav__icon">
        <use xlinkHref="img/sprite.svg#icon-chat" />
      </svg>
      <span className="user-nav__notification">13</span>
    </div>
    <div className="user-nav__user">
      <img
        src="img/user.jpg"
        className="user-nav__user-photo"
        alt="User Portrait"
      />
      <span className="user-nav__user-name">Philippe</span>
    </div>
  </nav>
);

export default UserNav;
