import Item from "./Item.js"

const ItemsComp = (props) =>   {

    return(
        <div className="MyShop">
            <div className ="App-header__ins">
                <a href="/">
                    <div className = "logo"/>
                </a>
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
  