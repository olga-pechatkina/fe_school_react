import { Link } from 'react-router-dom'
import axios from 'axios'
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { handleAction } from "./store/actions/index"
import { connect } from 'react-redux'

const Authorization = (props) =>  {
    const history = useHistory();

    const name = React.useRef();
    const password = React.useRef();
    const [loginError, setloginError] = useState(false);
    
    let messagePath={
        pathname: '/'
      }

    function Enter(){
        return axios.post("http://localhost:3001/login", {username: name.current.value,
            password: password.current.value}).then((data)=>{
                props.handleAction("CHANGE_USER", name.current.value);
                history.push(messagePath);
                props.handleAction("SET_TOKEN", data.data.accessToken);
            })
            .catch(()=>setloginError(true));
    }

    function Register(){
        history.push("/registration");
    }

    function handleKeyPress(ev){
        if(ev.key === 'Enter'){
            if (name && password){
                Enter();
            }
        }
    }

    function Logout(){
        props.handleAction("SET_TOKEN", null);
    }

return (
    <div className="Authorization">
        <div className ="App-header__ins">
        <Link to="/">
                <div className = "logo"/>
        </Link>
        </div>
        {!props.token && <div className = "wrapper">
            <h1>Авторизация</h1>
            <div className = "auth-row">
                <input className = "auth-input" placeholder = "Телефон, email или логин" ref={name} onKeyPress={handleKeyPress}/>
            </div>
            <div className = "auth-row">
                <input className = "auth-input" type = "password" placeholder = "Пароль" ref={password} onKeyPress={handleKeyPress}/>
                {loginError&&<p style={{color:"red"}}>Некорректная пара логин-пароль</p>}
            </div>
            <button type="button" className="btn-rubrics-mobile-view" onClick={Enter}>Войти</button>
            <button type="button" className="btn-rubrics-mobile-view" onClick={Register}>Регистрация</button>
        </div>}
        {props.token && <div className = "wrapper">
            <p>Вы уже вошли как {props.userName}</p>
            <button type="button" className="btn-rubrics-mobile-view" onClick={Logout}>Выйти</button>
        </div>}
    </div>
  )
}

const mapStateToProps = state => {
    return {
        token: state.user.userToken,
        userName: state.user.userName
    }
}

const mapDispatchToProps = {
    handleAction
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Authorization);
  