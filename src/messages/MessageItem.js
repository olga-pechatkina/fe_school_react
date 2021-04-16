
import {Link} from 'react-router-dom'
const MessageItem = (props) => {
    let messagePath={
        pathname: '/message_read',
        search: '?mode=answer&id='+props.item.id,
        state: {
          seller: true
        }
      }
    return (
        <div className = "messages-item">
            <div className = "dialog-date">{props.item.date}</div>
            <div className = "dialog-info">
                <Link to={messagePath} className="dialog-block-link" draggable="false">Диалог</Link>
                <div className = "dialog-info-author">{props.item.from}</div>
                <div className = "dialog-info-text">{props.item.text.substring(0,90)}</div>               
            </div>
        </div>
    )
}
export default MessageItem;