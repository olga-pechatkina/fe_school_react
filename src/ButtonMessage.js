
import { useHistory } from "react-router-dom";

const ButtonMessage = (props) => {
    const history = useHistory();

    let messagePath={
      pathname: '/message_read',
      search: '?mode=new',
      state: {
        seller: true
      }
    }

    function openMessage() {
      history.push(messagePath);
    }

    return (
        <button type="button" className="btn-rubrics-mobile-view_seller" onClick={openMessage}>Написать продавцу</button>
    )
}

export default ButtonMessage;