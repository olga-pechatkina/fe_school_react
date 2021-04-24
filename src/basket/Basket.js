import { connect } from 'react-redux'
import BasketItem  from "./BasketItem"
import { Link, useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

const Basket = (props) =>  {

  let basketItems= props.items.filter(it=> props.userBasket.find(el => el === it.id)!== undefined);
  const [commonCount, setCount] = useState(0);
  const [commonPrice, setPrice] = useState(0);  
  const [orderReady, setorderReady] = useState(false);  
  const history = useHistory();

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
    setorderReady(true);
    history.push(messagePath);
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
          <div className ="flex-row">
            <div style={{flexBasis: "60%"}}>Товары({commonCount})</div>
            <div style={{flexBasis: "40%"}}>{commonPrice}</div>
          </div>
          <div className ="flex-row">
            <div style={{flexBasis: "60%"}}>Доставка</div>
            <div style={{flexBasis: "40%"}}>250</div>
          </div>
          <div className ="flex-row">
            <div style={{flexBasis: "60%"}}>Общая стоимость</div>  
            <div style={{flexBasis: "40%"}}>{commonPrice+250}</div>
          </div>
          <div className ="flex-row">
            <input type="tel"  placeholder="Телефон" style={{marginRight: "10px"}}></input>  
            <input type="email" placeholder="Почта" cols="40"></input>
          </div>
          <button type="button" className="btn-rubrics-mobile-view" onClick={makeanOrder}>Оформление заказа</button>
          { orderReady && <div style={{marginTop: "6px"}}>Наши операторы свяжутся с вами для оформления заказа</div>}
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
  