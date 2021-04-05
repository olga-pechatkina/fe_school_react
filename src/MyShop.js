import ItemsComp from "./ItemsComp"
import { connect } from 'react-redux'

const MyShop  = (props) =>  {

  return(
  <ItemsComp items={props.items.filter(it=> props.userItems.find(el => el === it.id)!== undefined)} header = "Магазин" edit = "true"/>
  )
  }
 
  const mapStateToProps = state => {
    return {
      items: state.clothes.items,
      userItems: state.clothes.userItems
    }
  }
  
  export default connect(mapStateToProps, null)(MyShop);
  