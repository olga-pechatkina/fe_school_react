const Authorization = () =>  (
    <div className="Authorization">
        <div className ="App-header__ins">
        <a href="/">
                <div className = "logo"/>
        </a>
        </div>
        <div class = "wrapper">
            <h1>Авторизация</h1>
            <div className = "auth-row">
                <input className = "auth-input" placeholder = "Телефон, email или логин"/>
            </div>
            <div className = "auth-row">
                <input className = "auth-input" type = "password" placeholder = "Пароль"/>
            </div>
        </div>
    </div>
  )
  export default Authorization;
  