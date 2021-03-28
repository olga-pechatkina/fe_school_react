const Messages = () =>  (
    <div className="Authorization">
        <div className ="App-header__ins">
            <a href="/">
                <div className = "logo"/>
            </a>
        </div>
        <h1 style={{margin: "0px 5%"}}>Сообщения</h1>
        <div className = "messages-list">
            <div className = "messages-item">
                <div className = "dialog-date">13 марта</div>
                <div className = "dialog-info">
                    <a href="/message_read" class="dialog-block-link" draggable="false">Диалог</a>
                    <div className = "dialog-info-author">BestDresses</div>
                    <div className = "dialog-info-text">Ваш размер есть в наличии. Рекомендуем выбрать цвет, который будет сочетаться с маджентов</div>               
                </div>
            </div>
            <div className = "messages-item">
                <div className = "dialog-date">13 марта</div>
                <div className = "dialog-info">
                    <a href="/message_read" class="dialog-block-link" draggable="false">Диалог</a>
                    <div className = "dialog-info-author">BestDresses</div>
                    <div className = "dialog-info-text">Ваш размер есть в наличии. Рекомендуем выбрать цвет, который будет сочетаться с маджентов</div>               
                </div>
            </div>
        </div>
    </div>
  )
  export default Messages;
  