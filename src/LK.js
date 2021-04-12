import { connect } from 'react-redux'
import React, { useState } from "react";

const LK = (props) =>  {

  const [_editable, setEditable] = useState(false);
  const [data, setData] = useState({
    userName: props.userName,
    userCity: props.userCity
    });


  return(
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
    </div>
    <div className = "mobile-buttons">
        <a href="/myshop">
        {props.userIsSeller && <button type="button" className="btn-rubrics-mobile-view">Мой магазин</button>}
        </a>
        <a href="/messages">
         <button type="button" className="btn-rubrics-mobile-view">Мои сообщения</button>
        </a>
      </div>
    <div className = "info-LK">
        <div className = "info-LK-item">
            <div className = "info-LK-item-left">Вы зашли как:</div>
            <div className = {_editable ? "info-LK-item-right--editable" : "info-LK-item-right" }
                contentEditable={_editable} >{props.userName}</div>
        </div>
        <hr className = "line"/>
        <div className = "info-LK-item">
            <div className = "info-LK-item-left">Город:</div>
            <div className =  {_editable ? "info-LK-item-right--editable" : "info-LK-item-right" }
               contentEditable={_editable} >{props.userCity}</div>                
        </div>
        <hr className = "line"/>
        <button className = {_editable ? "item-block__save_lk" : "item-block__edit_lk"} title = "Редактировать" onClick={() => setEditable(!_editable)}/>
    </div>
  </div>
  )
}


  const mapStateToProps = state => {
    return {
      userName: state.clothes.userName,
      userCity: state.clothes.userCity,
      userIsSeller: state.clothes.userIsSeller
    }
  }
  
  export default connect(mapStateToProps, null)(LK);
  