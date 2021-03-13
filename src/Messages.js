const Messages = () =>  (
    <div className="Authorization">
        <h1>Сообщения</h1>
        <div className = "messages-list">
            <div className = "messages-item">
                <a href="/contacts/show/61110140" class="dialog-block-link" draggable="false">Диалог</a>
                <div class="dialog-avatar-wrap">
                    <img class="dialog-avatar" url="./images/item2.jpg" alt="" width="56" height="56"/>
                </div>
                <div className = "dialog-info">
                    <div className = "dialog-info-author">BestDresses</div>
                    <div className = "dialog-info-text">Ваш размер есть в наличии. Рекомендуем выбрать цвет, который будет сочетаться с маджентов</div>               
                </div>
                <div className = "dialog-date">13 марта</div>
            </div>
            <div className = "messages-item">
                <a href="/contacts/show/61110140" class="dialog-block-link" draggable="false">Диалог</a>
                <div class="dialog-avatar-wrap">
                    <img class="dialog-avatar" src="./images/item2.jpg" alt="" width="56" height="56"/>
                </div>
                <div className = "dialog-info">
                    <div className = "dialog-info-author">BestDresses</div>
                    <div className = "dialog-info-text">Ваш размер есть в наличии. Рекомендуем выбрать цвет, который будет сочетаться с маджентов</div>               
                </div>
                <div className = "dialog-date">13 марта</div>
            </div>
        </div>
    </div>
  )
  export default Messages;
  