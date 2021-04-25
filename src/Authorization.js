import { Link } from 'react-router-dom'
import axios from 'axios'
import React from "react";
import { useHistory } from "react-router-dom";

const Authorization = () =>  {
    const history = useHistory();

    const name = React.useRef();
    const password = React.useRef();
    
    let messagePath={
        pathname: '/'
      }

    function Enter(){
        return axios.post("http://localhost:3001/login", {username: name.current.value,
            password: password.current.value}).then(()=>history.push(messagePath));
    }

return (
    <div className="Authorization">
        <div className ="App-header__ins">
        <Link to="/">
                <div className = "logo"/>
        </Link>
        </div>
        <div className = "wrapper">
            <h1>Авторизация</h1>
            <div className = "auth-row">
                <input className = "auth-input" placeholder = "Телефон, email или логин" ref={name}/>
            </div>
            <div className = "auth-row">
                <input className = "auth-input" type = "password" placeholder = "Пароль" ref={password}/>
            </div>
            <button type="button" className="btn-rubrics-mobile-view" onClick={Enter}>Войти</button>
        </div>
    </div>
  )
}
  export default Authorization;
  