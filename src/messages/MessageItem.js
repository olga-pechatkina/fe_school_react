
const MessageItem = (props) => {
    return (
        <div className = "messages-item">
            <div className = "dialog-date">{props.item.date}</div>
            <div className = "dialog-info">
                <a href={'./message_read/' + props.item.id} className="dialog-block-link" draggable="false">Диалог</a>
                <div className = "dialog-info-author">{props.item.from}</div>
                <div className = "dialog-info-text">{props.item.text.substring(0,90)}</div>               
            </div>
        </div>
    )
}
export default MessageItem;