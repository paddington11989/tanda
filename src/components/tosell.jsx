import React from "react";
import "./tosell.css";
import TosellBlock from "./tosellblock";
import tosellimg from "./img/tosellimg.svg";

export default function Tosell(){
    return(
        <>
        <div className="tosell__wrapper">
            <div className="container">
                <h3 className="tosell-title">Похожие товары</h3>
                <div className="tosell__wrapper-block">
               <TosellBlock sellImg={tosellimg} toselltitle="Jack JK - F4" toselltext="Швейная машина" tosellCost="50 900 сом"/>
               <TosellBlock sellImg={tosellimg} toselltitle="Jack JK - F4" toselltext="Швейная машина" tosellCost="50 900 сом"/>
               <TosellBlock sellImg={tosellimg} toselltitle="Jack JK - F4" toselltext="Швейная машина" tosellCost="50 900 сом"/>
               <TosellBlock sellImg={tosellimg} toselltitle="Jack JK - F4" toselltext="Швейная машина" tosellCost="50 900 сом"/>
               <TosellBlock sellImg={tosellimg} toselltitle="Jack JK - F4" toselltext="Швейная машина" tosellCost="50 900 сом"/>
               <TosellBlock sellImg={tosellimg} toselltitle="Jack JK - F4" toselltext="Швейная машина" tosellCost="50 900 сом"/>
               <TosellBlock sellImg={tosellimg} toselltitle="Jack JK - F4" toselltext="Швейная машина" tosellCost="50 900 сом"/>
               <TosellBlock sellImg={tosellimg} toselltitle="Jack JK - F4" toselltext="Швейная машина" tosellCost="50 900 сом"/>
              </div>
            </div>
        </div>
        </>
    )
}