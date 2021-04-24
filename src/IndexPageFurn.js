import React, { useEffect } from "react"
import Itemslist from "./items/Itemslist"
import FilterPanel from "./filters/FilterPanel"
import { connect } from 'react-redux'
import { handleAction } from "./store/actions/index"
import { Link } from 'react-router-dom'

const IndexPageFurn = (props) => {
  
  useEffect(() => {
    props.handleAction("STORE_FILTER", props.selectedFilters);
  }, [props.selectedFilters])

  return (
    <div className="IndexPage">
      <div className ="App-header">
        <Link to="/">
          <div className = "logo"/>
        </Link>
        <div className = "contacts"/>
        <div className = "header-usermenu">
          <ul className = "header__nav-list">
            <div className = "profile header__nav-block">
              <div className = "header-btn-entry">
                <Link to="/lk">
                  <span className = "header-btn-entry__icon"/>
                </Link>
              </div>
            </div>
            <li className = "header__nav-item">
              <div className = "header-basket">
                <Link to="/basket">
                <span className = "header-basket__icon"/>
                </Link>
              </div>  
            </li>   
          </ul>
        </div>  
      </div>
      <div className = "mobile-buttons show-on-mobile">
        <button type="button" className="btn-rubrics-mobile-view">Товары</button>
        <button type="button" className="btn-rubrics-mobile-view">Фильтры</button>
      </div>
      <div className="menu hide-on-mobile">
        <Link to="/">
          <div className = "menu-item" style = {{marginRight: "12px"}}>Одежда и аксессуары</div>
        </Link>
        <div className = "menu-item menu-item--active">Мебель</div>
      </div>
      <div className = "hide-on-mobile">
        <span className = "banner"/>
      </div>
      <div className = "catalog">
        <FilterPanel/>
        <Itemslist
          items={props.items}
          sellerName ={props.sellerName}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    items: state.furniture.items,
    sellerName: state.furniture.sellers,
    selectedFilters: state.filters.selectedFilters
  }
}

const mapDispatchToProps ={
  handleAction,
}

export default connect(mapStateToProps,  mapDispatchToProps, null)(IndexPageFurn);
