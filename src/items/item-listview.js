import React from "react";

const ItemListView = ({item, sellerName}) =>{
    return (
    <div className = "item-container-list">
        <div className = "item-list">
            <span>         
                <img className="item1-list" src={item.photo} alt =""/>
            </span>              
        </div>
        <div className = "item-list_info-container">
            <div className = "item-list_name"> {item.name} </div>
            <div className = "item-list__master-name"> {sellerName} </div>
        </div>
        <div className = "item-list__payment-container">
            <div className = "item-list__cost2">{item.price}</div>
            <div className = "item-list__cost">
                <div className="item-list__basketblock">
                    <button className = "item-list__favorite" title = "Добавить в Избранное"/>
                    <button className="item-list__to-basket" title="Положить в корзину товар">В корзину</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemListView