const Seller = () =>  (
    <div className="Seller">
      <div className ="App-header">
        <a href="/">
            <div className = "logo"/>
        </a>
        <div className = "header-usermenu">
          <ul className = "header__nav-list">
            <div className = "profile header__nav-block">
              <div className = "header-btn-entry">
                <span className = "item-lk__favorite"/>
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
        <div style={{top: "5px", position: "relative"}}>
        <a href="./message_read">
            <button type="button" className="btn-rubrics-mobile-view_seller">Написать продавцу</button>
        </a>
        </div>
      </div>
      <div className = "info-LK">
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Продавец:</div>
              <div className = "info-LK-item-right">Sewing company</div>
          </div>
          <hr className = "line"/>
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Город:</div>
              <div className = "info-LK-item-right">Москва</div>                
          </div>
          <hr className = "line"/>
      </div>
    </div>
    )
    export default Seller;
    