import React from "react";
import Itemslist from "./items/Itemslist"
import FilterPanel from "./filters/FilterPanel"
import { connect } from 'react-redux'
import ItemsComp from "./ItemsComp";

//TODO: see comments
class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterCity: "",
      filterYear: "",
      filterPrice: "",
      filterPriceMin: "",
      filterPriceMax: "",      
      filterWithPhoto: false,
    };
  }

  render() {
    return (
  <div className="IndexPage">
    <div className ="App-header">
      <div className = "logo"/>
      <div className = "contacts"/>
      <div className = "header-usermenu">
        <ul className = "header__nav-list">
          <div className = "profile header__nav-block">
            <div className = "header-btn-entry">
              <a href="/lk">
                <span className = "header-btn-entry__icon"/>
              </a>
            </div>
          </div>
          <li className = "header__nav-item">
            <div className = "header-basket">
              <a href="/basket">
               <span className = "header-basket__icon"/>
              </a>
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
      <div className = "menu-item menu-item--active" style = {{marginRight: "12px"}}>Одежда и аксессуары</div>
      <div className = "menu-item">Мебель</div>
    </div>
    <div className = "hide-on-mobile">
      <span className = "banner"/>
    </div>
    <div className = "catalog">

      {/* весь блок выносим как компонент FilterPanel или что-то в этом духе.
          Нужно заменить чекбоксы на радиогруппу там, где преполагается исключающий выбор. Если выбор множественный, можно оставить чекбоксы.
       */}
      <FilterPanel/>
      {/* давай тут попробуем красиво сделать. я сама с редаксом в бою дело не имела, но, раз уж в программе есть...
      https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns у них тут есть пример с фильтрами */}
      <Itemslist
          items={this.props.items.filter(item => (!this.state.filterYear || (this.state.filterYear && item.year === this.state.filterYear)) &&
        (!this.state.filterPrice || (this.state.filterPriceMin < item.price && (this.state.filterPriceMax > item.price || this.state.filterPriceMax === null))))}
      />
    </div>
  </div>
);
}
}


const mapStateToProps = state => {
  return {
      items: state.clothes.items
  }
}

export default connect(mapStateToProps, null)(IndexPage);
