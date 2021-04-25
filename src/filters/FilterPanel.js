import { connect } from 'react-redux'
import FilterItem from './FilterItem'
import FilterItemFromTo from './FilterItemFromTo'
import { handleAction, handleFilter, handleFilterNum } from "./../store/actions/index"

const FilterPanel = (props) => {

  return (
    <aside id = "filter-panel-left" className = "hide-on-mobile">
      <div className = "catalog-filters-list">      
          <FilterItem 
            items={{name: "Город", data: props.filterCity}} 
            selected = {props.selectedFilters['city']} 
            onChange={(value) => props.handleFilter(props.store, "city", value)}
          />  
          <FilterItem 
            items={{name: "Коллекция год", data: props.filterYear}} 
            selected = {props.selectedFilters['year']} 
            onChange={(value) => props.handleFilter(props.store, "year", value)}
          />
          <FilterItemFromTo
            name= "Цена"
            value={props.selectedFilters['price']}
            objChanged={(value) => props.handleFilterNum(props.store, "price", value)}
          />   
          <FilterItem 
            items={{name: "С фотографией", data: props.filterWithPhoto}} 
            selected = {props.selectedFilters['withPhoto']} 
            onChange={(value) => props.handleFilter(props.store, "withPhoto", value)}
          />
      </div>
    </aside>
  );
}
    const mapStateToProps = state => {
      return {
        filterCity: state.clothes.filterCity,
        filterYear: state.clothes.filterYear, 
        filterWithPhoto: state.clothes.filterWithPhoto,  
      }
  }

  
  const mapDispatchToProps ={
    handleAction,
    handleFilter,
    handleFilterNum
  }
  
  export default connect(mapStateToProps,  mapDispatchToProps, null)(FilterPanel);