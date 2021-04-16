import ItemsComp from "./ItemsComp"
import { connect } from 'react-redux'
import { handleAction } from "./store/actions/index"

const MyShop  = (props) =>  {
  const items = props.items.filter(it=> props.userItems.find(el => el === it.id)!== undefined)

  function _changeItems(id){ 
    props.handleAction("REMOVE_ITEM", id);
  };

  return <ItemsComp items={items} header="Магазин" editable={true} onChange={_changeItems}/>

}
 
  const mapStateToProps = state => {
    return {
      items: [...state.clothes.items, ...state.furniture.items],
      userItems: state.user.userItems
    }
  }

  const mapDispatchToProps ={
    handleAction
  }
  
  export default connect(mapStateToProps, mapDispatchToProps, null)(MyShop);