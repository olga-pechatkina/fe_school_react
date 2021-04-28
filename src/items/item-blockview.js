import React from "react";
import FavButton from './FavButton'
import BasketButton from './BasketButton'
import { connect } from 'react-redux'
import { handleAction } from "./../store/actions/index"
import { Link } from 'react-router-dom'

const ItemBlockView = (props) =>{

    function addToFav(id){
        props.handleAction("ADD_TO_FAV", id);
    }

    function addToBasket(id){
        props.handleAction("ADD_TO_BASKET", id);
    }   

    return <div className = "item-container">
        <div className = "item-block">
                    <span>
                    <Link to={"/details/" + props.item.id}>
                        <img className="item1" src={props.item.photo ? props.item.photo : '/nopic.png'} alt =""/>
                    </Link>
                    </span>
        </div>
        {!props.inFav && props.token && <FavButton classN = "item-block__favorite"  onClick={() => addToFav(props.item.id)}/>}
        <div className = "item-block__info-container">
            <div className = "item-block__name"> {props.item.name} </div>
            <Link to={'./seller/' + props.item.sellerId}>
                <div className = "item-block__master-name"> {props.sellerName} </div>
            </Link>
            <div className = "item-block__payment-container">
                <div className = "item-block__cost tobasket">
                    <span>{props.item.price}</span>
                    <BasketButton classN = "item-block__to-basket"  onClick={() => addToBasket(props.item.id)}/>
                </div>
            </div>
        </div>
    </div>
}



const mapDispatchToProps ={
    handleAction
  }

  const mapStateToProps = state => {
    return {
        token: state.user.userToken
    }
  }
  
export default connect (mapStateToProps, mapDispatchToProps, null)(ItemBlockView);