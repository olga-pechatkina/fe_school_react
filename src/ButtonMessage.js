
import { useHistory } from "react-router-dom";

const ButtonMessage = (props) => {
    const history = useHistory();

    function openMessage() {
      history.push("/message_read/null");
    }

    return (
        <button type="button" className="btn-rubrics-mobile-view_seller" onClick={openMessage}>Написать продавцу</button>
    )
}

export default ButtonMessage;