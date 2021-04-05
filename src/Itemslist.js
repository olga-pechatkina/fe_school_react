import { connect } from 'react-redux'
import React, { useState } from "react";

const Itemslist = (props) =>  {
    const [mode, setMode] = useState(0);

return(
    <div className = "all-items">
        <div className = "filter-type">
            <button className ="filter-table" onClick={() => setMode(1)}/>
            <button className ="filter-list" onClick={() => setMode(0)}/>           
        </div>
        {(mode===0) && (<div className = "all-items-block">
            {props.items.map((item, index) => (
                <div className = "item-container"> 
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
                    <div className = "item-block__master-name"> {props.sellerName.find(el => el.id === item.sellerId).name } </div>
                    </a>
                    <div className = "item-block__payment-container">
                    <div className = "item-block__cost tobasket">
                        <span>{item.price}</span>
                        <button className="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                    </div>
                    </div>
                </div>
                </div>
            ))}
        </div>)}
        {(mode===1) && (<div className = "all-items-list">
            {props.items.map((item, index) => (
                <div className = "item-container-list">
                    <div className = "item-list">
                        <span>         
                            <img className="item1-list" src={item.photo} alt =""/>
                        </span>              
                    </div>
                    <div className = "item-list_info-container">
                        <div className = "item-list_name"> {item.name} </div>
                        <div className = "item-list__master-name"> {item.seller} </div>
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
            ))}           
        </div>)}
    </div>
);
}

const mapStateToProps = state => {
    return {
        sellerName: state.clothes.sellers
    }
}

export default connect(mapStateToProps, null)(Itemslist);