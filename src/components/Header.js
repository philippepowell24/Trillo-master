import React from "react";
import UserNav from "./UserNav";

const Header = () => (
  <>
    <header className="header">
      <img src="img/logo.png" className="logo" alt="Trillo Logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref="img/sprite.svg#icon-magnifying-glass" />
          </svg>
        </button>
      </form>
      <UserNav />
    </header>
  </>
);

export default Header;
