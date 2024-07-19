import React from "react";
import "./comment.css"
import StarRating from "./star";
import MultipleItems from "./slider";


export default function Comment(){
    return(
        <>
        <div className="comment__wrapper">
            <div className="container">
                <h3 className="comment-title">Отзывы</h3>
                <div className="count-comment"><span className="comment-bold">4.9</span> <div><StarRating/></div> <span className="comment-grey">60 отзывов</span></div>
           

               <div className="comment-slider">
                <MultipleItems/>
               </div>
               <button className="slider-comment-btn">Смотреть все отзывы</button>
            </div>
        </div>
        </>
    )
}