import { connect } from 'react-redux'
import BasketItem  from "./BasketItem"

const Basket = (props) =>  {

  return (
    <div className="Basket">
        <div className ="App-header__ins">
            <a href="/">
                <div className = "logo"/>
            </a>
            <h1>Корзина</h1>
            <div  style = {{textAlign: "right"}}>
                <button type="button" className="btn-rubrics-mobile-view">Оформить покупку</button>
            </div>
        </div>
        <div className = "all-items-list">        
          {props.items.filter(it=> props.userBasket.find(el => el === it.id)!== undefined).map((item, index) => (
            <BasketItem item={item} seller ={props.sellers.find(el => el.id === item.sellerId).name}/>
              ))}
        </div>
    </div>
  )
  }

  const mapStateToProps = state => {
    return {
      userBasket: state.clothes.userBasket,
      items: state.clothes.items,
      sellers: state.clothes.sellers
    }
  }
  
  export default connect(mapStateToProps, null)(Basket);
  