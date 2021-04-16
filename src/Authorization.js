import {Link} from 'react-router-dom'
const Authorization = () =>  (
    <div className="Authorization">
        <div className ="App-header__ins">
        <Link to="/">
                <div className = "logo"/>
        </Link>
        </div>
        <div className = "wrapper">
            <h1>Авторизация</h1>
            <div className = "auth-row">
                <input className = "auth-input" placeholder = "Телефон, email или логин"/>
            </div>
            <div className = "auth-row">
                <input className = "auth-input" type = "password" placeholder = "Пароль"/>
            </div>
            <button type="button" className="btn-rubrics-mobile-view">Войти</button>
        </div>
    </div>
  )
  export default Authorization;
  