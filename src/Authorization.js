const Authorization = () =>  (
    <div className="Authorization">
        <div className ="App-header">
        <a href="/">
                <div className = "logo"/>
        </a>
        </div>
        <div>Авторизация</div>
        <div className = "auth-row">
            <input className = "auth-input" placeholder = "Телефон, email или логин"/>
        </div>
        <div className = "auth-row">
            <input className = "auth-input" type = "password" placeholder = "Пароль"/>
        </div>
    </div>
  )
  export default Authorization;
  