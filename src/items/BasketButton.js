import React from "react";

const BasketButton = (props) =>{

    return (
        <button className = {props.classN} title = "Положить в корзину товар" onClick = {props.onClick}>В корзину</button>
    )
}

export default BasketButton