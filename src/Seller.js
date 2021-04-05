import { connect } from 'react-redux'

const Seller = (props) =>  (
    <div className="Seller">
      <div className ="App-header__ins">
        <a href="/">
            <div className = "logo"/>
        </a>
        <div className = "header-usermenu">
          <ul className = "header__nav-list">
            <div className = "profile header__nav-block">
              <div className = "header-btn-entry">
                <a href="/favorites">
                    <span className = "item-lk__favorite"/>
                </a>
              </div>
            </div>
            <li className = "header__nav-item">
              <div className = "header-basket">
                <a href="/basket">
                    <span className = "header-basket__icon"/>
                </a>
              </div>  
            </li>   
          </ul>
        </div>  
        <div style={{top: "5px", position: "relative", textAlign: "right"}}>
        <a href="./message_read">
            <button type="button" className="btn-rubrics-mobile-view_seller">Написать продавцу</button>
        </a>
        </div>
      </div>
      <div className = "info-LK">
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Продавец:</div>
              <div className = "info-LK-item-right">{props.sellers.find(el => el.id === props.match.params.id).name}</div>
          </div>
          <hr className = "line"/>
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Город:</div>
              <div className = "info-LK-item-right">{props.sellers.find(el => el.id === props.match.params.id).city}</div>                
          </div>
          <hr className = "line"/>
      </div>
    </div>
    )

    const mapStateToProps = state => {
      return {
        sellers: state.clothes.sellers,
      }
    }
    
    export default connect(mapStateToProps, null)(Seller);
    