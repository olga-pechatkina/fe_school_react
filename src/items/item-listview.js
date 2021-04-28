import React from "react";
import FavButton from './FavButton'
import { connect } from 'react-redux'
import { handleAction } from "./../store/actions/index"
import { Link } from 'react-router-dom'

const ItemListView = (props) =>{
    function addToFav(id){
        props.handleAction("ADD_TO_FAV", id);
    }
    return (
    <div className = "item-container-list">
        <div className = "item-list">
            <span>  
                <Link to={"/details/" + props.item.id}>       
                    <img className="item1-list" src={props.item.photo ? props.item.photo : '/nopic.png'} alt =""/>
                </Link>
            </span>              
        </div>
        <div className = "item-list_info-container">
            <div className = "item-list_name"> {props.item.name} </div>
            <Link to={'./seller/' + props.item.sellerId}>
                <div className = "item-list__master-name"> {props.sellerName} </div>
            </Link>
        </div>
        <div className = "item-list__payment-container">
            <div className = "item-list__cost2">{props.item.price}</div>
            <div className = "item-list__cost">
                <div className="item-list__basketblock">
                    {!props.inFav && props.token && <FavButton classN = "item-list__favorite" onClick={() => addToFav(props.item.id)}/>}
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
  
const mapStateToProps = state => {
return {
    token: state.user.userToken
}
}

export default connect (mapStateToProps, mapDispatchToProps, null)(ItemListView);