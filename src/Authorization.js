const Authorization = () =>  (
    <div className="Authorization">
        <div>Авторизация</div>
        <div className = "auth-row">
            <input className = "auth-input" placeholder = "Телефон, email или логин"/>
        </div>
        <div className = "auth-row">
            <input className = "auth-input" type = "password"/>
            <label class = "auth-input-label">Пароль</label>
        </div>
    </div>
  )
  export default Authorization;
  