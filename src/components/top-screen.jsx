import React from "react";
import "./top-screen.css";
import topCart from "./img/cart-top.svg"
import ProductDetail from "../productdetails";


export default function TopScreen(){
    return(
        <>
        <section className="top-screen">
            <div className="container">
                <nav className="navig">
                   <ul className="nav-list">
                    <li className="nav-item"><a href="#" className="nav-link">Все категории</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Стать продавцом</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">О нас</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Курьерам</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Контакты</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Доставка</a></li>
                   </ul>
                </nav>
                <ul className="list">
                    <li className="list-item"><a href="#" className="list-link">Главная</a></li>
                    <li className="list-item"><a href="#" className="list-link">Бытовая техника</a></li>
                    <li className="list-item"><a href="#" className="list-link">Стиральная машина</a></li>
                </ul>

                <div className="top-wrapper">
                    <div className="wrapper-cart"><img className="topcart" src={topCart} alt="" /></div>
                    <div className="cart-text">
                    <ProductDetail barcodeId="365" />
                    <button className="top-btn">Оформить в кредит</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}