import { connect } from 'react-redux'
import FilterItem from './FilterItem'
import { handleAction } from "./../store/actions/index"

const FilterPanel = (props) => {

    let addItem = (prop, index) => {
        props.handleAction("ADD_FILTER", prop, index);
    }

  return (
    <aside id = "filter-panel-left" className = "hide-on-mobile">
    <div className = "catalog-filters-list">      
        <FilterItem items={{name: "Город", data: props.filterCity}} selected = {props.filterCitySelected} onChange={() => addItem("filterCitySelected")}/>  
        <FilterItem items={{name: "Коллекция год", data: props.filterYear}}/>
        <FilterItem items={{name: "Цена", data: props.filterPrice}}/>   
        <FilterItem items={{name: "С фотографией", data: props.filterWithPhoto}}/>
    </div>
    </aside>
  );
}
    const mapStateToProps = state => {
      return {
          filterCity: state.clothes.filterCity,
          filterYear: state.clothes.filterYear,
          filterPrice: state.clothes.filterPrice,
          filterPriceMin: state.clothes.filterPriceMin,
          filterPriceMax: state.clothes.filterPriceMax,      
          filterWithPhoto: state.clothes.filterWithPhoto,
          filterCitySelected: state.clothes.filterCitySelected,
          filterYearSelected: state.clothes.filterYearSelected,
          filterPriceSelected: state.clothes.filterPriceSelected,
          filterPriceMinSelected: state.clothes.filterPriceMinSelected,
          filterPriceMaxSelected: state.clothes.filterPriceMaxSelected,      
          filterWithPhotoSelected: state.clothes.filterWithPhotoSelected,
      }
  }

  
  const mapDispatchToProps ={
    handleAction
  }
  
  export default connect(mapStateToProps,  mapDispatchToProps, null)(FilterPanel);