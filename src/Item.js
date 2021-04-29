import React, { useState } from "react";
import { connect } from 'react-redux'
import { handleAction } from "./store/actions/index"

const Item = (props) => {
    const [_editable, setEditable] = useState(false);

    const name = React.useRef();
    const price = React.useRef();

    function handleChange(e) {
        props.onChange(+e.target.id);
      }

      function changeItem(){
        setEditable(false);
        props.handleAction("CHANGE_ITEM", props.item.id, name.current.innerText, price.current.innerText);
      }

    return(
    <div className = "item-container">
        <div className = "item-block">
            <span>         
                <img className="item1" src={props.item.photo ? props.item.photo : '/nopic.png'} alt =""/>
            </span>            
        </div>
        {props.editable && <button className = "item-block__edit" title = "Редактировать" onClick={() => setEditable(!_editable)}/>}

        <div className = "item-block__info-container">
            <div className = {_editable ? "item-block__name--editable" : "item-block__name" }
                suppressContentEditableWarning contentEditable={_editable} ref={name}>{props.item.name}</div>
            <div className = "item-block__master-name"> {props.item?.sellerName} </div>
            <div className = "item-block__payment-container">
                <div className = "item-block__cost tobasket">
                    <span className =  {_editable ? "item-block__name--editable" : "" } suppressContentEditableWarning contentEditable={_editable} ref={price}>{props.item.price}</span>
                   {!_editable && <button className="item-block__to-basket" title="Положить в корзину товар" id = {props.item.id} onClick = {handleChange}>Удалить</button>}
                   {_editable && <button className="item-block__to-basket" title="Положить в корзину товар" id = {props.item.id} onClick = {changeItem}>Сохранить</button>}                   
                </div>
            </div>
        </div>
    </div>
    )
}


const mapDispatchToProps ={
    handleAction
  }
  

export default connect (null, mapDispatchToProps)(Item);