import React from "react";
import "./footer.css";
import headerLogo from "./img/header-svg.svg";
import icon1 from "./img/whatsapp.svg";
import icon2 from "./img/insta.svg";

export default function Footer(){
    return(
        <>
        <div className="footer__wrapper">
            <div className="container">
                <div className="footer__wrapper-block">
                    <div className="footer__logo">
                    <a href="#" className="header-logo-link">
                    <img src={headerLogo} alt="" />
                    <span class="footer-logo__text">TANDA</span>
                    </a>
                    <div className="footer__icons">
                        <a href="" className="footer__icons-link"><img src={icon2} alt="" /></a>
                        <a href="" className="footer__icons-link"><img src={icon1} alt="" /></a>
                    </div>
                    </div>
                
                <div className="footer__company">
                    <p className="footer__title">Компания</p>
                    <ul className="footer__company-list">
                        <li className="footer-list-item"><a href="#">О нас</a></li>
                        <li className="footer-list-item"><a href="#">Способы оплаты</a></li>
                        <li className="footer-list-item"><a href="#">Доставка</a></li>
                        <li className="footer-list-item"><a href="#">Политика конфиденциальности</a></li>
                        <li className="footer-list-item"><a href="#">Персональные данные</a></li>
                    </ul>
                </div>
                <div className="footer__partners">
                    <p className="footer__title">Партнерам</p>
                    <ul className="footer__company-list">
                        <li className="footer-list-item"><a href="#">Продавайте на UNO</a></li>
                        <li className="footer-list-item"><a href="#">Курьерам</a></li>
                    </ul>
                </div>
                <div className="footer__contacts">
                    <p className="footer__title">Контакты</p>
                    <ul className="footer__company-list">
                        <li className="footer-list-item"><a href="#">unokg@gmail.com</a></li>
                        <li className="footer-list-item"><a href="#">+996 700 000 000</a></li>
                        <li className="footer-list-item"><a href="#">+996 500 000 000</a></li>
                    </ul>
                </div>

            </div>
            
            </div>
            <div className="footer-undertext">
                <div className="undertext-cost">
                    <p className="undertext-colored">100000 сом</p>
                    <p className="undertext-grey">99000 сом</p>
                </div>
                <button className="undertext-btn">Купить сейчас</button>
            </div>
        </div>
        </>
    )
}