import Item from "./Item.js"

const ItemsComp = (props) =>   (
    <div className="MyShop">
        <div className ="App-header__ins">
            <a href="/">
                <div className = "logo"/>
            </a>
            <h1>{props.header}</h1>
        </div>
        <div className = "all-items-block-favorites">
        {props.items.map((item, index) => (
            <Item item={item} edit={props.edit}/>
        ))}
        </div>
    </div>
  )
  export default ItemsComp;
  