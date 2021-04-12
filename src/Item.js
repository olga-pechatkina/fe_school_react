import React, { useState } from "react";
import { connect } from 'react-redux'
import { handleAction } from "./store/actions/index"
//TODO: см комменты
const Item = (props) => {
    const [_editable, setEditable] = useState(false);
    const [data, setData] = useState({
        name: props.item.name,
        price: props.item.price
      });

    function handleChange(e) {
        props.onChange(+e.target.id);
      //  props.handleAction("REMOVE_ITEM", props.item.id);
      }

      function onKeyDownName(ev){
        let start = ev.target.selectionStart;
        setData({...data, name : ev.currentTarget.innerText}/*, () => {
          this.refs.input.selectionStart = this.refs.input.selectionEnd = start + 1
      }*/);
        _onKeyDown(ev);
      }

      function onKeyDownPrice(ev){
       setData({...data, price : ev.currentTarget.innerText});
        _onKeyDown(ev);
    }

      function _onKeyDown(ev){
        if (ev.key === 'Enter'){
          ev.preventDefault();
          process.nextTick(()=>{
            setEditable(false);
            props.handleAction("CHANGE_ITEM", props.item.id, data);
          })
        }
      }

    return(
    <div className = "item-container">
        <div className = "item-block">
            <span>         
                <img className="item1" src={props.item.photo} alt =""/>
            </span>            
        </div>
        {/* Метод правильно называется getElementsByTagName.
            Вообще все подобные селекторы в dom используют множественное число в своем названии,
            потому что все они возвращают коллекцию элементов.
            Однако, это плохая практика использоват обращение к реальному dom внутри реакт компонента.
            В данном случае лучше будет написать компонент <Button title={"Редактировать"} onClick={clickFunction}>
            В clickFunction у тебя будет доступен this.state компонента, который нужно редактировать и сохранять.
            Также нужно иметь иметь ввиду, что если мы используем этот компонент для разных ролей пользователей,
            то возможность редактирования на уровне prop должна передаваться с учетом роли.
         */}

        {props.editable && <button className = "item-block__edit" title = "Редактировать" onClick={() => setEditable(!_editable)}/>}

        {/*  а вот этот кусок желательно сделать компонентом, который тебе нужно радактировать и сохранять */}
        <div className = "item-block__info-container">
            <div className = {_editable ? "item-block__name--editable" : "item-block__name" }
                contentEditable={_editable} onKeyDown = {onKeyDownName}>{data.name}</div>
            <div className = "item-block__master-name"> {props.item?.sellerName} </div>
            <div className = "item-block__payment-container">
                <div className = "item-block__cost tobasket">
                    <span className =  {_editable ? "item-block__name--editable" : "" } contentEditable={_editable} onKeyDown = {onKeyDownPrice}>{data.price}</span>
                    <button className="item-block__to-basket" title="Положить в корзину товар" id = {props.item.id} onClick = {handleChange}>Удалить</button>
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