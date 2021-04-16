import { connect } from 'react-redux'
import { handleAction } from "./store/actions/index"
import React, { useState } from "react";
import { Link } from 'react-router-dom'

const LK = (props) =>  {

  const [_editable, setEditable] = useState(false);
  /*const [data, setData] = useState({
    userName: props.userName,
    userCity: props.userCity
    });*/

  const userName = React.useRef();
  const userCity = React.useRef(); 

  function editData(){
    if(_editable){
      props.handleAction("CHANGE_USER_DATA", null, userName.current.innerText, userCity.current.innerText);
    }

    setEditable(!_editable);
  }


  return(
  <div className="LK">
    <div className ="App-header__ins">
      <Link to="/">
        <div className = "logo"/>
      </Link>
      <div className = "contacts"/>
      <div className = "header-usermenu">
        <ul className = "header__nav-list">
          <div className = "profile header__nav-block">
            <div className = "header-btn-entry">
              <Link to="/favorites">              
                <span className = "item-lk__favorite"/>
              </Link>
            </div>
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
    </div>
    <div className = "mobile-buttons">
        <Link to="/myshop">
          {props.userIsSeller && <button type="button" className="btn-rubrics-mobile-view">Мой магазин</button>}
        </Link>
        <Link to="/messages">
          <button type="button" className="btn-rubrics-mobile-view">Мои сообщения</button>
        </Link>
      </div>
    <div className = "info-LK">
        <div className = "info-LK-item">
            <div className = "info-LK-item-left">Вы зашли как:</div>
            <div className = {_editable ? "info-LK-item-right--editable" : "info-LK-item-right" }
              suppressContentEditableWarning contentEditable={_editable} ref={userName}>{props.userName}</div>
        </div>
        <hr className = "line"/>
        <div className = "info-LK-item">
            <div className = "info-LK-item-left">Город:</div>
            <div className =  {_editable ? "info-LK-item-right--editable" : "info-LK-item-right" }
              suppressContentEditableWarning contentEditable={_editable} ref={userCity}>{props.userCity}</div>                
        </div>
        <hr className = "line"/>
        <button className = {_editable ? "item-block__save_lk" : "item-block__edit_lk"} title = "Редактировать" onClick={editData}/>
    </div>
  </div>
  )
}

const mapDispatchToProps ={
  handleAction
}

  const mapStateToProps = state => {
    return {
      userName: state.user.userName,
      userCity: state.user.userCity,
      userIsSeller: state.user.userIsSeller
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps, null)(LK);
  