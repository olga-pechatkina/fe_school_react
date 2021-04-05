import React from "react";
import Itemslist from "./Itemslist"
import { connect } from 'react-redux'
import ItemsComp from "./ItemsComp";

class IndexPage extends React.Component {
  constructor() {
    super();

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
      <aside id = "filter-panel-left" className = "hide-on-mobile">
      <div className = "catalog-filters-list">      
          <div className = "catalog-filters-item">
            <div className = "catalog-filters-box_top">
              <span className = "catalog-filters-box_name">Город</span>
            </div>
            <div className = "catalog-filters-box_content">
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterCity === "Москва"}
                    onChange={() => {this.setState({filterCity: "Москва"})}}/>
                    <span className = "catalog-filters_check--label">Москва</span>
                  </span>
                </span>
              </label>
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterCity === "Санкт-Петербург"}
                    onChange={() => {this.setState({filterCity: "Санкт-Петербург"})}}/>
                    <span className = "catalog-filters_check--label">Санкт-Петербург</span>
                  </span>
                </span>
              </label>
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterCity === "Нижний Новгород"}
                    onChange={() => {this.setState({filterCity: "Нижний Новгород"})}}/>
                    <span className = "catalog-filters_check--label">Нижний Новгород</span>
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div className = "catalog-filters-item">
            <div className = "catalog-filters-box_top">
              <span className = "catalog-filters-box_name">Коллекция год</span>
            </div>
            <div className = "catalog-filters-box_content">
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterYear === "2021"}
                    onChange={() => {this.setState({filterYear: "2021"})}}/>
                    <span className = "catalog-filters_check--label">2021</span>
                  </span>
                </span>
              </label>
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterYear === "2020"}
                    onChange={() => {this.setState({filterYear: "2020"})}}/>
                    <span className = "catalog-filters_check--label">2020</span>
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div className = "catalog-filters-item">
            <div className = "catalog-filters-box_top">
              <span className = "catalog-filters-box_name">Цена</span>
            </div>
            <div className = "catalog-filters-box_content">
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterPriceMin === "less1"}
                    onChange={() => {this.setState({filterPrice: "less1", filterPriceMin:"0", filterPriceMax: "1000"})}}/>
                    <span className = "catalog-filters_check--label">0-1000</span>
                  </span>
                </span>
              </label>
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterPrice === "between12"}
                    onChange={() => {this.setState({filterPrice: "between12", filterPriceMin:"1000", filterPriceMax: "2000"})}}/>
                    <span className = "catalog-filters_check--label">1000-2000</span>
                  </span>
                </span>
              </label>
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterPrice === "between23"}
                    onChange={() => {this.setState({filterPrice: "between23", filterPriceMin:"2000", filterPriceMax: "3000"})}}/>
                    <span className = "catalog-filters_check--label">2000-3000</span>
                  </span>
                </span>
              </label>
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterPrice === "more3"}
                    onChange={() => {this.setState({filterPrice: "more3", filterPriceMin:"3000", filterPriceMax: null})}}/>
                    <span className = "catalog-filters_check--label">больше 3000</span>
                  </span>
                </span>
              </label>
            </div>
          </div>    
          <div className = "catalog-filters-item">
            <div className = "catalog-filters-box_top">
              <span className = "catalog-filters-box_name">С фотографией</span>
            </div>
            <div className = "catalog-filters-box_content">
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input"  checked = {this.state.filterWithPhoto === "true"}
                    onChange={() => {this.setState({filterWithPhoto: "true"})}}/>
                    <span className = "catalog-filters_check--label">только с фотографией</span>
                  </span>
                </span>
              </label>
            </div>
          </div>        
        </div>
      </aside>
      <Itemslist items={this.props.items.filter(item => (!this.state.filterYear || (this.state.filterYear && item.year === this.state.filterYear)) &&
        (!this.state.filterPrice || (this.state.filterPriceMin < item.price && (this.state.filterPriceMax > item.price || this.state.filterPriceMax === null))))} />
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
