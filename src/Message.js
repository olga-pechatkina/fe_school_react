const Message = () =>  (
    <div className="Authorization">
        <h1>Сообщение</h1>
        <div className = "messages-list">
            <div className = "messages-item">
                <a href="/contacts/show/61110140" class="dialog-block-link" draggable="false">Диалог</a>
                <div class="dialog-avatar-wrap">
                    <img class="dialog-avatar" src="./images/item2.jpg" alt="" width="56" height="56"/>
                </div>
                <div className = "dialog-info">
                    <div className = "dialog-info-author">BestDresses</div>
                    <div className = "dialog-info-text">
                        Ваш размер есть в наличии. Рекомендуем выбрать цвет, который будет сочетаться с маджентовым.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>               
                </div>
                <div className = "dialog-date">13 марта</div>
            </div>
        </div>
    </div>
  )
  export default Message;
  