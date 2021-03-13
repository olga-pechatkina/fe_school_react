const LK = () =>  (
    <div className="LK">
    <div className ="App-header">
      <div className = "logo"/>
      <div className = "contacts"/>
      <div className = "header-usermenu">
        <ul className = "header__nav-list">
          <li className = "favorites header__nav-item">
            <button type ="button" className = "button_fav">
              <span className="fav_icon"/>   
            </button>
          </li>  
          <div className = "profile header__nav-block">
            <div className = "header-btn-entry">
              <span className = "item-lk__favorite"/>
            </div>
          </div>
          <li className = "header__nav-item">
            <div className = "header-basket">
              <span className = "header-basket__icon"/>
            </div>  
          </li>   
        </ul>
      </div>  
    </div>
        <div className = "info-LK">
            <div className = "info-LK-item">
                <div className = "info-LK-item-left">Вы зашли как:</div>
                <div className = "info-LK-item-right">Продающий Петр Петрович</div>
            </div>
            <div className = "info-LK-item">
                <div className = "info-LK-item-left">Город:</div>
                <div className = "info-LK-item-right">Москва</div>                
            </div>
        </div>
    </div>
  )
  export default LK;
  