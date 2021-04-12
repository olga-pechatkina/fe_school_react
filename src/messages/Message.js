import { connect } from 'react-redux'

const Message = (props) =>  {
    const item = props.userMessages.find(it => it.id === +props.match.params.id);
    const writeMode = props.match.params.id === "null"
    return (
    <div className="Authorization">
        <div className ="App-header__ins">
            <a href="/">
                <div className = "logo"/>
            </a>
        </div>
        <div className = "mobile-buttons">
            <a href="/messages/null">
            <button type="button" className="btn-rubrics-mobile-view">Ответить</button>
            </a>
        </div>
        <h1 style={{margin: "0px 5%"}}>Сообщение</h1>
        <div className = "messages-list">
            <div className = "messages-item">
                <div className = "dialog-date">{item ? item.date : ''}</div>
                <div className = "dialog-info">
                    <div className = "dialog-info-author">{item ? item.from : ''}</div>
                    <div className = "dialog-info-text" contentEditable = {writeMode}>{item ? item.text : ''}</div>               
                </div>
            </div>
        </div>
    </div>
  )
    }
    const mapStateToProps = state => {
        return {
            userMessages: state.clothes.userMessages
        }
    }
    
    export default connect(mapStateToProps, null)(Message);
  