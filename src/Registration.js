import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Registration = () =>  {
    const history = useHistory();

    const name = React.useRef();
    const password = React.useRef();

    const [regError, setregError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    
    let messagePath={
        pathname: '/auto'
      }

    function Enter(){
        setLoading(true);
        return axios.post("http://localhost:3001/new_user", {username: name.current.value,
        password: password.current.value}).then((data)=>{
            history.push(messagePath);
        })
        .catch(()=>setregError(true))
        .finally(()=>setLoading(false));
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
            <button type="button" className="btn-rubrics-mobile-view" onClick={Enter}>Регистрация</button>
            {regError && <p style={{color:"red"}}>Пользователь с таким именем уже существует</p>}
        </div>
        {isLoading && <div className="spinner"></div>}
    </div>
  )
}
  export default Registration;
  