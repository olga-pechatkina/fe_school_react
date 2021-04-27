import { Link } from 'react-router-dom'
import React from "react";
import { useHistory } from "react-router-dom";

const Registration = () =>  {
    const history = useHistory();

    const name = React.useRef();
    const password = React.useRef();
    
    let messagePath={
        pathname: '/auto'
      }

    function Enter(){
        history.push(messagePath);
    }

return (
    <div className="Authorization">
        <div className ="App-header__ins">
        <Link to="/">
                <div className = "logo"/>
        </Link>
        </div>
        <div className = "wrapper">
            <h1>Регистрация</h1>
            <div className = "auth-row">
                <input className = "auth-input" placeholder = "Телефон, email или логин" ref={name}/>
            </div>
            <div className = "auth-row">
                <input className = "auth-input" type = "password" placeholder = "Пароль" ref={password}/>
            </div>
            <div className = "auth-row">
                <label><input type = "checkbox" ref={password}/>Я-продавец</label>
            </div>
            <button type="button" className="btn-rubrics-mobile-view" onClick={Enter}>Регистрация</button>
        </div>
    </div>
  )
}
  export default Registration;
  