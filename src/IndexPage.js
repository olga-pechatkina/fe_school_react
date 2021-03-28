import React from "react";
import Itemslist from "./Itemslist"

class IndexPage extends React.Component {
  constructor() {
    super();

    this.state = {
      filterCity: "",
      filterYear: "",
      filterPrice: "",
      filterWithPhoto: false,
      items: [
        {
          name: "Кардиган",
          seller: "Sewing company", //should be id to map with city
          price: "1900",
          photo: "/item1.jpg",
          size: "44-56",
          fabric: "merino wool",
          year: "2020"
        },
        {
          name: "Свитер",
          seller: "Sewing company",
          price: "1900",
          photo: "/item2.jpg",
          size: "44-56",
          fabric: "cotton",
          year: "2021"
        },    
        {
          name: "Кофта",
          seller: "Clothes for you",
          price: "2200",
          photo: "/item3.jpg",
          size: "44-48",
          fabric: "wool",
          year: "2020"
        },   
        {
          name: "Бадлон",
          seller: "Wear clothes",
          price: "1100",
          photo: "/item4.jpg",
          size: "44-52",
          fabric: "merino wool",
          year: "2020"
        },
        {
          name: "Свитер",
          seller: "Clothes for you",
          price: "2000",
          photo: "/item5.jpg",
          size: "44-48",
          fabric: "cotton",
          year: "2019"
        },
        {
          name: "Кардиган",
          seller: "Wear clothes",
          price: "2700",
          photo: "/item6.jpg",
          size: "44-50",
          fabric: "wool",
          year: "2020"
        },
        {
          name: "Кофта",
          seller: "Sewing company",
          price: "1500",
          photo: "/item7.jpg",
          size: "44-48",
          fabric: "wool",
          year: "2020"
        },
        {
          name: "Свитер теплый",
          seller: "Sewing company",
          price: "2500",
          photo: "/item8.jpg",
          size: "44-48",
          fabric: "merino wool",
          year: "2020"
        },
      ]
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
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterPrice === "less1"}
                    onChange={() => {this.setState({filterPrice: "less1"})}}/>
                    <span className = "catalog-filters_check--label">0-1000</span>
                  </span>
                </span>
              </label>
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterPrice === "between12"}
                    onChange={() => {this.setState({filterPrice: "between12"})}}/>
                    <span className = "catalog-filters_check--label">1000-2000</span>
                  </span>
                </span>
              </label>
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterPrice === "between23"}
                    onChange={() => {this.setState({filterPrice: "between23"})}}/>
                    <span className = "catalog-filters_check--label">2000-3000</span>
                  </span>
                </span>
              </label>
              <label className ="catalog-filters_check">
                <span className = "catalog-filters_check--left">
                  <span className = "catalog-filters_check--block">
                    <input type = "checkbox" className = "catalog-filters_check--input" checked = {this.state.filterPrice === "more3"}
                    onChange={() => {this.setState({filterPrice: "more3"})}}/>
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
      <Itemslist items={this.state.items} />
    </div>
  </div>
);
}
}

export default IndexPage;
