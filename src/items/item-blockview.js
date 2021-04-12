import React from "react";

const ItemBlockView = ({item, sellerName}) =>{

    return <div className = "item-container">
        <div className = "item-block">
                    <span>
                    <a href={"/details/" + item.id}>
                        <img className="item1" src={item.photo} alt =""/>
                    </a>
                    </span>
        </div>
        <button className = "item-block__favorite" title = "Добавить в Избранное"/>
        <div className = "item-block__info-container">
            <div className = "item-block__name"> {item.name} </div>
            <a href={'./seller/' + item.sellerId}>
                <div className = "item-block__master-name"> {sellerName} </div>
            </a>
            <div className = "item-block__payment-container">
                <div className = "item-block__cost tobasket">
                    <span>{item.price}</span>
                    <button className="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                </div>
            </div>
        </div>
    </div>
}

export default ItemBlockView