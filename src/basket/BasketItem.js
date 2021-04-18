
import React, { useState, useEffect } from "react";
import { handleAction } from "./../store/actions/index";
import { connect } from 'react-redux'

const BasketItem = (props) => {
    const [quantity, setQuantity] = useState(1);

    function addToBasket(id){
        setQuantity(quantity+1);
        props.handleAction("ADD_TO_BASKET", id);
    }

    function removeFromBasket(id){
        if (quantity >1) setQuantity (quantity-1);
        props.handleAction("REM_FROM_BASKET", id);
    }

    
  useEffect(() => {
    setQuantity(props.item.count)
  });


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
                <button className="master-cart-items__item-btn master-cart-items__item-btn--minus" type="button" onClick={()=>removeFromBasket(props.item.id)}>
                    <span className="master-cart-items__item-icon-minus"/>
                </button>
                <input type="text" value={quantity} maxLength="3" className="master-cart-items__item-quantity-counter"></input>
                <button className="master-cart-items__item-btn master-cart-items__item-btn--plus" onClick={()=>addToBasket(props.item.id)} type="button">
                    <span className="master-cart-items__item-icon-plus"/>
                </button>
            </div>
            <div className = "master-cart-items__item-quantity-counter">{props.item.price}</div>
      </div>
    )
}

const mapDispatchToProps ={
    handleAction
  }

export default connect (null, mapDispatchToProps)(BasketItem);