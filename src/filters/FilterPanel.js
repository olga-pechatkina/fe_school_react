import { connect } from 'react-redux'
import FilterItem from './FilterItem'
import { handleAction, handleFilter } from "./../store/actions/index"

const FilterPanel = (props) => {

    let addItem = (prop, index) => {
        props.handleAction("ADD_FILTER", prop, index);
    }

  return (
    <aside id = "filter-panel-left" className = "hide-on-mobile">
      <div className = "catalog-filters-list">      
          <FilterItem 
            items={{name: "Город", data: props.filterCity}} 
            selected = {props.selectedFilters['city']} 
            onChange={(value) => props.handleFilter("city", value)}
          />  
          <FilterItem 
            items={{name: "Коллекция год", data: props.filterYear}} 
            selected = {props.selectedFilters['year']} 
            onChange={(value) => props.handleFilter("year", value)}
          />
          <FilterItem 
            items={{name: "Цена", data: props.filterPrice}} 
            selected = {props.selectedFilters['price']} 
            onChange={(value) => props.handleFilter("price", value)}
          />   
          <FilterItem 
            items={{name: "С фотографией", data: props.filterWithPhoto}} 
            selected = {props.selectedFilters['withPhoto']} 
            onChange={(value) => props.handleFilter("withPhoto", value)}
          />
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
        selectedFilters: state.clothes.selectedFilters,
      }
  }

  
  const mapDispatchToProps ={
    handleAction,
    handleFilter,
  }
  
  export default connect(mapStateToProps,  mapDispatchToProps, null)(FilterPanel);