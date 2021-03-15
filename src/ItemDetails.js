const ItemDetails = () =>  (
    <div className="ItemDetails">
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
      <span>         
        <img className="item1" style={{padding: "6px 0px", margin: "0px 5%"}}src="/item1.jpg" alt =""/>
      </span> 
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
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Материал:</div>
              <div className = "info-LK-item-right">шерсть 100%</div>                
          </div>
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Размеры:</div>
              <div className = "info-LK-item-right">48-56</div>                
          </div>
          <hr className = "line"/>
      </div>
    </div>
    )
    export default ItemDetails;
    