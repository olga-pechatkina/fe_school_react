import React, { useState } from "react";

const Item = (props) => {
    // readonly={readonly}
    const [readonly, setRO] = useState("false");

    return(
    <div className = "item-container">
        <div className = "item-block">
            <span>         
                <img className="item1" src={props.item.photo} alt =""/>
            </span>            
        </div>
        {(props.edit==="true") && (<button className = "item-block__edit" title = "Редактировать" onClick={() => document.getElementByTagName('input').readOnly = false}/>)}
        <div className = "item-block__info-container">
            <input type="text" className = "item-block__name" value= {props.item.name} />
            <div className = "item-block__master-name"> {props.item.seller} </div>
            <div className = "item-block__payment-container">
                <div className = "item-block__cost tobasket">
                <span>{props.item.price}</span>
                <button className="item-block__to-basket" title="Положить в корзину товар">Удалить</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Item;