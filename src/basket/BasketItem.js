
import React, { useState } from "react";
const BasketItem = (props) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className = "item-container-list">
            <div className = "item-list">
            <span>         
                <img className="item1-list" src={props.item.photo} alt =""/>
            </span>             
            </div>
            <div className = "item-list_info-container">
            <div className = "item-list_name"> {props.item.name} </div>
            <div className = "item-list__master-name"> {props.seller}</div>
            </div>
            <div className= "cmaster-cart-items__item-quantity">
                <button className="master-cart-items__item-btn master-cart-items__item-btn--minus" type="button" onClick={() => {if (quantity >1) setQuantity(quantity-1)}}>
                    <span className="master-cart-items__item-icon-minus"/>
                </button>
                <input type="number" min="1" max="1000" value={quantity} maxLength="3" className="master-cart-items__item-quantity-counter" style={{width: "20px"}}></input>
                <button className="master-cart-items__item-btn master-cart-items__item-btn--plus" onClick={() => setQuantity(quantity+1)} type="button">
                    <span className="master-cart-items__item-icon-plus"/>
                </button>
            </div>
            <div className = "item-list__cost_basket">{props.item.price}</div>
      </div>
    )
}
export default BasketItem;