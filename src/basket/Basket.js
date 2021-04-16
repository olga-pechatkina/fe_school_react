import { connect } from 'react-redux'
import BasketItem  from "./BasketItem"
import {Link} from 'react-router-dom'

const Basket = (props) =>  {

  return (
    <div className="Basket">
        <div className ="App-header__ins">
            <Link to="/">
                <div className = "logo"/>
            </Link>
            <h1>Корзина</h1>
            <div  style = {{textAlign: "right"}}>
                <button type="button" className="btn-rubrics-mobile-view">Оформить покупку</button>
            </div>
        </div>
        <div className = "all-items-list">        
          {props.items.filter(it=> props.userBasket.find(el => el === it.id)!== undefined).map((item, index) => (
            <BasketItem item={item} seller ={props.sellers.find(el => el.id === item.sellerId).name} key={index + '--' + index}/>
              ))}
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
  