import React, { useState } from "react";
import "./header.css";
import headerLogo from "./img/header-svg.svg";
import shopping from "./img/Shopping cart.svg";
import profile from "./img/Profile.svg";
import searchIcon from "./img/search-header.svg";
import burger from "./img/burger.svg";
import closed from "./img/closed-burger.svg";

export default function Header(){
    const [isNavlist, setIsnavlist] = useState(false);
    const toggleMenu = () => {
        setIsnavlist(!isNavlist)
    }
    return(
        <>
        <header className="header">
        <div className="container">
            <div className="container-flex">
            <div className="header-logo">
                <a href="#" className="header-logo-link">
                    <img src={headerLogo} alt="" />
                    <span class="logo__text">TANDA</span>
                    </a>
            </div>
            <div className="header-input">
                <input className="input-text" type="text" placeholder="Искать на UNO" />
            </div>
            <div className="header-contacts">
                 <a href="#" className="header-cart searchIcon"><img src={searchIcon} alt="" /></a>
                <a href="#" className="header-cart"><img src={profile} alt="" /> <p className="cart-nav-text">Войти</p></a>
                <a href="#" className="header-cart"><img src={shopping} alt="" /> <p className="cart-nav-text">Корзина</p></a>

              
              <div className="header-cart burger-icon" onClick={toggleMenu}>
        {isNavlist ? (
          <img src={closed} alt="" />
        ) : (
            <img src={burger} alt="" />
        )}
                  </div>
               
                  {isNavlist && (
        <div className="nav__list-open">
          <div className="open-list">
            <ul className="list-block first-list">
              <li>Способ установки</li>
              <li>Напряжение</li>
              <li>Цвет</li>
              <li>Материал</li>
              <li>Способ установки</li>
              <li>Напряжение</li>
              <li>Цвет</li>
              <li>Материал</li>
              <li>Управление</li>
              <li>Цвет</li>
              <li>Способ установки</li>
              <li>Материал</li>
              <li>Напряжение</li>
              <li>Управление</li>
              <li>Управление</li>
            </ul>
            <ul className="list-block second-list">
            <li>Способ установки</li>
              <li>Напряжение</li>
              <li>Цвет</li>
              <li>Материал</li>
              <li>Способ установки</li>
              <li>Напряжение</li>
              <li>Цвет</li>
              <li>Материал</li>
              <li>Управление</li>
              <li>Цвет</li>
              <li>Способ установки</li>
              <li>Материал</li>
              <li>Напряжение</li>
              <li>Управление</li>
              <li>Управление</li>
            </ul>
          </div>
        </div>
      )}



            </div>
            </div>
           
        </div>
        </header>
        </>
    )
}