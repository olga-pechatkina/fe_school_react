import Item from "./Item.js"
import { Link } from 'react-router-dom'

const ItemsComp = (props) =>   {

    return(
        <div className="MyShop">
            <div className ="App-header__ins">
                <Link to="/">
                    <div className = "logo"/>
                </Link>
                <h1>{props.header}</h1>
            </div>
            <div className = "all-items-block-favorites">
            {props.items.map((item, index) => (
                <Item item={item} editable={props.editable} key={index.toString() + '--' + index} onChange = {props.onChange}/>
            ))}
            </div>
        </div>
    )
}
export default ItemsComp;
  