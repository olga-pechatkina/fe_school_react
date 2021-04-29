import { connect } from 'react-redux'
import ButtonMessage from "./ButtonMessage"
import { Link } from 'react-router-dom'

const Seller = (props) =>  {
  let seller=props.sellers.find(el => el.id === +props.match.params.id);
  
  return (
    <div className="Seller">
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
        {props.token && <ButtonMessage seller={seller}/>}
        </div>
      </div>
      <div className = "info-LK">
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Продавец:</div>
              <div className = "info-LK-item-right">{seller?.name}</div>
          </div>
          <hr className = "line"/>
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Город:</div>
              <div className = "info-LK-item-right">{seller?.city}</div>
          </div>
          <hr className = "line"/>
      </div>
    </div>
    )
        }

    const mapStateToProps = state => {
      return {
        sellers: [...state.clothes.sellers,...state.furniture.sellers],
        token: state.user.userToken
      }
    }
    
    export default connect(mapStateToProps, null)(Seller);
    