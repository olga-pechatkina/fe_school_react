import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Message = (props) =>  {
    let id = +new URLSearchParams(props.location.search).get('id')
    let mode = new URLSearchParams(props.location.search).get('mode');
    const item =  mode !== "new" ? props.userMessages.find(it => it.id === id) : null;
    const sellerName = props.location.state ? props.location.state.seller.name : null;
    let message = React.useRef();
    const [mesError, setMesError] = useState(false);
    const history = useHistory();

    function sendMessage(){
        if(!message.current.value){
            setMesError(true);
        }
        else history.push("/message_sent");
    }

    return (
    <div className="Authorization">
        <div className ="App-header__ins">
            <Link to="/">
                <div className = "logo"/>
            </Link>
        </div>
        <h1 style={{margin: "20px 5%"}}>Сообщение</h1>
        {mesError && <p style={{color:"red", margin: "20px 5%"}}>Сообщение пустое</p>} 
        <textarea rows="7" ref={message} style={{minWidth: "320px", margin: "0px 5%", width: "auto"}} placeholder="Введите сообщение"/>
        <div className = "mobile-buttons">
            { mode==="answer" && <button type="button" className="btn-rubrics-mobile-view" onClick={sendMessage}>Ответить</button> }
            { mode==="new" && <button type="button" className="btn-rubrics-mobile-view" onClick={sendMessage}>Написать</button> }
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
  