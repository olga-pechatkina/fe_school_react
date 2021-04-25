import MessageItem from "./MessageItem";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Messages = (props) =>  (
    <div className="Authorization">
        <div className ="App-header__ins">
            <Link to="/">
                <div className = "logo"/>
            </Link>
        </div>
        <h1 style={{margin: "0px 5%"}}>Сообщения</h1>
        <div className = "messages-list">
        {props.messages.map((item, index) => 
            <MessageItem item = {item} key={index.toString() + '--' + index}/>
        )}
        </div>
    </div>
  )

  const mapStateToProps = state => {
    return {
        messages: state.user.userMessages
    }
}

export default connect(mapStateToProps, null)(Messages);
  