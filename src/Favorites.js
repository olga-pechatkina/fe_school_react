import ItemsComp from "./ItemsComp"
import { connect } from 'react-redux'
import { handleAction } from "./store/actions/index"

const Favorites = (props) =>  {

    function _changeFav(id){ 
      props.handleAction("REMOVE_FAV", id);
    };

    return(
    <ItemsComp items={props.items.filter(it=> props.userFavorites.find(el => el === it.id)!== undefined)} header = "Избранное" onChange={_changeFav}/>
    )
  } 

  const mapStateToProps = state => {
    return {
      items: state.clothes.items,
      userFavorites: state.clothes.userFavorites
    }
  }

  const mapDispatchToProps ={
    handleAction
  }
  
  export default connect(mapStateToProps, mapDispatchToProps, null)(Favorites);