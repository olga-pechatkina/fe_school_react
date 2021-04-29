import { connect } from 'react-redux'
import ButtonMessage from "./ButtonMessage"
import {Link} from 'react-router-dom'
import { handleAction } from "./store/actions/index"
import { useHistory } from "react-router-dom";

const ItemDetails = (props) => {
  const item = props.items.find(it => it.id === +props.match.params.id);
  const seller = props.sellers.find(el => el.id === item?.sellerId);
  const history = useHistory();

  function addToBasket(){
    props.handleAction("ADD_TO_BASKET", item.id);
  }

  return (
  <div className="ItemDetails">
      <div className ="App-header__ins">
        <Link to="/">
            <div className = "logo"/>
        </Link>
        <div className = "header-usermenu">
          <ul className = "header__nav-list">
            <div className = "profile header__nav-block">
              {props.token && <div className = "header-btn-entry">
                <Link to="/favorites">
                 <span className = "item-lk__favorite"/>
                </Link>
              </div>}
            </div>
            <li className = "header__nav-item">
              <div className = "header-basket">
                <Link to="/basket">
                    <span className = "header-basket__icon"/>
                </Link>
              </div>  
            </li>   
          </ul>
        </div>  
        <div style={{top: "5px", position: "relative", textAlign: "right"}}>
          <button type="button" className="btn-rubrics-mobile-view_seller" onClick={addToBasket} style={{marginRight: "10px"}}>Добавить в корзину</button>
          {props.token && <ButtonMessage seller ={seller}/>}
        </div>
      </div>
      <span>
        <img className="item-big" style={{padding: "6px 0px", margin: "20px 5%"}} src={item?.photo} alt =""/>
      </span> 
      <div className = "info-LK">
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Продавец:</div>
              <div className = "info-LK-item-right">{seller?.name} </div>
          </div>
          <hr className = "line"/>
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Город:</div>
              <div className = "info-LK-item-right">{seller?.city}</div>
          </div>
          <hr className = "line"/>
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Материал:</div>
              <div className = "info-LK-item-right">{item?.fabric}</div>
          </div>
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Размеры:</div>
              <div className = "info-LK-item-right">{item?.size}</div>
          </div>
          <hr className = "line"/>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      items: [...state.clothes.items, ...state.furniture.items],
      sellers: [...state.clothes.sellers, ...state.furniture.sellers],
      token: state.user.userToken
  }
}

const mapDispatchToProps ={
  handleAction
}

export default connect(mapStateToProps, mapDispatchToProps, null)(ItemDetails);
    