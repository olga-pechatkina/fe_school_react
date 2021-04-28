import { connect } from 'react-redux'
import BasketItem  from "./BasketItem"
import { Link, useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

const Basket = (props) =>  {

  let basketItems= props.items.filter(it=> props.userBasket.find(el => el === it.id)!== undefined);
  const [commonCount, setCount] = useState(0);
  const [commonPrice, setPrice] = useState(0);  
  const [orderReady, setOrderReady] = useState(false);
  const [dataError, setDataError] = useState(false);    
  const [countError, setCountError] = useState(false);   
  const [mailError, setMailError] = useState(false); 
  const history = useHistory();
  const mail = React.useRef();
  const phone = React.useRef();

  let messagePath={
      pathname: '/'
    }

  function countItems(){
    let count=0,price=0;
    basketItems.forEach(it => it["count"] =0);
    props.userBasket.forEach(id=> {
      let el = basketItems.find(el => el.id === id);
      if(el) {
        el.count++;
        count++;
        price+=el.price;
      }
    });
    setCount(count);
    setPrice(price);
  }

  useEffect(() => {
    countItems();
  });

  function makeanOrder() {
    setDataError(false);
    setCountError(false);
    setOrderReady(false);
    setMailError(false);

    if (!mail.current.value && !phone.current.value){
      return setDataError(true);
    }
    else if (commonCount===0) {
      return setCountError(true);      
    }
    else if(!checkMail(mail.current.value) && !phone.current.value){
      return setMailError(true);
    } 
    else setOrderReady(true);
  }

  function goHome() {
    history.push(messagePath);
  }

  function checkPhone(ev){
    if(isNaN(ev.key)){
      ev.preventDefault();
    }
  }

  function checkMail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <div className="Basket">
        <div className ="App-header__ins">
            <Link to="/">
                <div className = "logo"/>
            </Link>
            <h1>Корзина</h1>
        </div>
        <div className = "all-items-list">        
          {basketItems.map((item, index) => (
            <BasketItem item={item} seller ={props.sellers.find(el => el.id === item.sellerId).name} key={index + '--' + index}/>
              ))}
        </div>
        <div className ="App-header__ins flex-column">
          <h3  style={{marginTop: "50px"}}>Общая информация</h3>
          <div className ="flex-row" style={{margin: "10px 0px"}}>
            <div style={{flexBasis: "30%"}}>Товары({commonCount})</div>
            <div style={{flexBasis: "40%"}}>{commonPrice}</div>
          </div>
          <div className ="flex-row" style={{margin: "10px 0px"}}>
            <div style={{flexBasis: "30%"}}>Доставка</div>
            <div style={{flexBasis: "40%"}}>250</div>
          </div>
          <div className ="flex-row" style={{margin: "10px 0px"}}>
            <div style={{flexBasis: "30%"}}>Общая стоимость</div>  
            <div style={{flexBasis: "40%"}}>{commonPrice+250}</div>
          </div>
          <div style={{marginTop: "6px", fontSize: "12px"}}>Для оформления заказа заполните одно из полей для связи</div>
          <div className ="flex-row" style={{margin: "10px 0px"}}>
            <input type="tel"
              placeholder="Телефон"
              style={{marginRight: "10px"}}
              onKeyPress={checkPhone}
              ref={phone}>
            </input>  
            <input type="email" placeholder="Почта" ref={mail}></input>
          </div>
          {dataError && !orderReady && <p style={{color:"red"}}>Ни одно из полей не заполнено</p>}
          {countError && !orderReady && <p style={{color:"red"}}>Не выбран ни один товар</p>}   
          {mailError  && !orderReady && <p style={{color:"red"}}>Неверный формат почты</p>}   
          <div className ="flex-row" style={{margin: "10px 0px"}}>
            <button type="button"
              style={{margin: "10px 0px"}}
              className="btn-rubrics-mobile-view"
              onClick={makeanOrder}
              disabled={orderReady}
            >Оформление заказа</button>
            <button type="button"
              style={{margin: "10px 10px", width: "260px"}}
              className="btn-rubrics-mobile-view"
              onClick={()=>history.push('/auto')}
              disabled={orderReady}
            >Регистрация и оформление заказа</button>
          </div>
          { orderReady && <div className ="flex-column" style={{margin: "10px 0px"}}>
            <div style={{marginTop: "6px"}}>Наши операторы свяжутся с вами для оформления заказа</div>
              <button type="button" style={{margin: "10px 0px"}} className="btn-rubrics-mobile-view" onClick={goHome}>На главную страницу</button>
            </div>}
        </div>
    </div>
  )
  }

  const mapStateToProps = state => {
    return {
      userBasket: state.user.userBasket,
      items: [...state.clothes.items, ...state.furniture.items],
      sellers: [...state.clothes.sellers,...state.furniture.sellers]
    }
  }
  
  export default connect(mapStateToProps, null)(Basket);
  