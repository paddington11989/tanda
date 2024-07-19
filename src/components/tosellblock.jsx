import React from "react";
import SellStarRating from "./tosellstar";
import "./tosell.css";

export default function TosellBlock({sellImg,toselltitle,toselltext, tosellCost}){
    return(
        <>
        <div className="block-sell-item">
            <div className="sell-img"><img className="sell-item-img" src={sellImg}/></div>
            <div className="sell-context">
                <p className="sell-context-title">{toselltitle}</p>
                <p className="sell-context-text">{toselltext}</p>
                <div className="sell-context-star">
                    <SellStarRating/>
                    <p className="sell-context-mimitext">0 отзывов</p>
                </div>
                <p className="sell-cost">{tosellCost}</p>

            </div>
            <button className="tosell-btn">Купить сейчас</button>
        </div>
        </>
    )
}