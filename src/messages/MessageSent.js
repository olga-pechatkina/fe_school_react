import {Link} from 'react-router-dom'
const MessageSent = (props) =>  (
    <div className="Authorization">
        <div className ="App-header__ins">
            <Link to="/">
                <div className = "logo"/>
            </Link>
        </div>
        <h1 style={{margin: "0px 5%"}}>Сообщения</h1>
        <div className = "messages-list">
            Сообщение отправлено
        </div>
    </div>
  )

export default MessageSent;
  