const Messages = () =>  (
    <div className="Authorization">
        <div className ="App-header">
            <a href="/">
                <div className = "logo"/>
            </a>
        </div>
        <h1>Сообщения</h1>
        <div className = "messages-list">
            <div className = "messages-item">
                <a href="/message_read" class="dialog-block-link" draggable="false">Диалог</a>
                <div className = "dialog-info">
                    <div className = "dialog-info-author">BestDresses</div>
                    <div className = "dialog-info-text">Ваш размер есть в наличии. Рекомендуем выбрать цвет, который будет сочетаться с маджентов</div>               
                </div>
                <div className = "dialog-date">13 марта</div>
            </div>
            <div className = "messages-item">
                <a href="/message_read" class="dialog-block-link" draggable="false">Диалог</a>
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
  