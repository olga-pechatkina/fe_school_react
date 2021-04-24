import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const Message = (props) =>  {
    let id = +new URLSearchParams(props.location.search).get('id')
    let mode = new URLSearchParams(props.location.search).get('mode');
    const item =  mode !== "new" ? props.userMessages.find(it => it.id === id) : null;
    const sellerName = props.location.state ? props.location.state.seller.name : null;
    return (
    <div className="Authorization">
        <div className ="App-header__ins">
            <Link to="/">
                <div className = "logo"/>
            </Link>
        </div>
        <h1 style={{margin: "20px 5%"}}>Сообщение</h1>
        <textarea rows="7" style={{minWidth: "320px", margin: "0px 5%", width: "auto"}} placeholder="Введите сообщение"/>
        <div className = "mobile-buttons">
            <Link to="/message_sent">
                { mode==="answer" && <button type="button" className="btn-rubrics-mobile-view">Ответить</button> }
                { mode==="new" && <button type="button" className="btn-rubrics-mobile-view">Написать</button> }
            </Link>
        </div>
        <div className = "messages-list">
            <div className = "messages-item">
                <div className = "dialog-date">{item ? item.date : ''}</div>
                <div className = "dialog-info">
                    <div className = "dialog-info-author">{item ? item.from : ''}</div>
                    <div className = "dialog-info-text">{item ? item.text : ''}</div>               
                </div>
            </div>
        </div>
    </div>
  )
    }
    const mapStateToProps = state => {
        return {
            userMessages: state.user.userMessages
        }
    }
    
    export default connect(mapStateToProps, null)(Message);
  