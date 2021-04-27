import React from "react";
import FavButton from './FavButton'
import { connect } from 'react-redux'
import { handleAction } from "./../store/actions/index"

const ItemListView = (props) =>{
    function addToFav(id){
        props.handleAction("ADD_TO_FAV", id);
    }
    return (
    <div className = "item-container-list">
        <div className = "item-list">
            <span>         
                <img className="item1-list" src={props.item.photo ? props.item.photo : '/nopic.png'} alt =""/>
            </span>              
        </div>
        <div className = "item-list_info-container">
            <div className = "item-list_name"> {props.item.name} </div>
            <div className = "item-list__master-name"> {props.sellerName} </div>
        </div>
        <div className = "item-list__payment-container">
            <div className = "item-list__cost2">{props.item.price}</div>
            <div className = "item-list__cost">
                <div className="item-list__basketblock">
                    {!props.inFav && <FavButton classN = "item-list__favorite" onClick={() => addToFav(props.item.id)}/>}
                    <button className="item-list__to-basket" title="Положить в корзину товар">В корзину</button>
                </div>
            </div>
        </div>
    </div>
    )
}

const mapDispatchToProps ={
    handleAction
  }
  

export default connect (null, mapDispatchToProps)(ItemListView);