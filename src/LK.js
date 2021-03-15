const LK = () =>  (
  <div className="LK">
    <div className ="App-header__ins">
      <a href="/">
        <div className = "logo"/>
      </a>
      <div className = "contacts"/>
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
      <div className = "mobile-buttons">
        <a href="/myshop">
         <button type="button" className="btn-rubrics-mobile-view">Мой магазин</button>
        </a>
        <a href="/messages">
         <button type="button" className="btn-rubrics-mobile-view">Мои сообщения</button>
        </a>
      </div>
    </div>
    <div className = "info-LK">
        <div className = "info-LK-item">
            <div className = "info-LK-item-left">Вы зашли как:</div>
            <div className = "info-LK-item-right">Sewing company</div>
        </div>
        <hr className = "line"/>
        <div className = "info-LK-item">
            <div className = "info-LK-item-left">Город:</div>
            <div className = "info-LK-item-right">Москва</div>                
        </div>
        <hr className = "line"/>
        <button className = "item-block__edit_lk" title = "Редактировать"/>
    </div>
  </div>
  )
  export default LK;
  