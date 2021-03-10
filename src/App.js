import './App.css';

function App() {
  return (
    <div className="App">
      <div className ="App-header">
        <div className = "logo"/>
        <div className = "contacts"/>
        <div className = "header-usermenu">
          <ul className = "header__nav-list">
            <li className = "favorites header__nav-item">
              <button type ="button" className = "button_fav">
                <span className="fav_icon"/>   
              </button>
            </li>  
            <div className = "profile header__nav-block">
              <div className = "header-btn-entry">
                <span className = "header-btn-entry__icon"/>
              </div>
            </div>
            <li className = "header__nav-item">
              <div className = "header-basket">
                <span className = "header-basket__icon"/>
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
        <div className = "menu-item">Одежда и аксессуары</div>
        <div className = "menu-item">Обувь</div>
        <div className = "menu-item">Красота и уход</div>
        <div className = "menu-item">Все для дома</div>
        <div className = "menu-item">Для детей</div>
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
                      <input type = "checkbox" className = "catalog-filters_check--input"/>
                      <span className = "catalog-filters_check--label">Москва</span>
                    </span>
                  </span>
                </label>
                <label className ="catalog-filters_check">
                  <span className = "catalog-filters_check--left">
                    <span className = "catalog-filters_check--block">
                      <input type = "checkbox" className = "catalog-filters_check--input"/>
                      <span className = "catalog-filters_check--label">Санкт-Петербург</span>
                    </span>
                  </span>
                </label>
                <label className ="catalog-filters_check">
                  <span className = "catalog-filters_check--left">
                    <span className = "catalog-filters_check--block">
                      <input type = "checkbox" className = "catalog-filters_check--input"/>
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
                      <input type = "checkbox" className = "catalog-filters_check--input"/>
                      <span className = "catalog-filters_check--label">2021</span>
                    </span>
                  </span>
                </label>
                <label className ="catalog-filters_check">
                  <span className = "catalog-filters_check--left">
                    <span className = "catalog-filters_check--block">
                      <input type = "checkbox" className = "catalog-filters_check--input"/>
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
                      <input type = "checkbox" className = "catalog-filters_check--input"/>
                      <span className = "catalog-filters_check--label">0-1000</span>
                    </span>
                  </span>
                </label>
                <label className ="catalog-filters_check">
                  <span className = "catalog-filters_check--left">
                    <span className = "catalog-filters_check--block">
                      <input type = "checkbox" className = "catalog-filters_check--input"/>
                      <span className = "catalog-filters_check--label">1000-2000</span>
                    </span>
                  </span>
                </label>
                <label className ="catalog-filters_check">
                  <span className = "catalog-filters_check--left">
                    <span className = "catalog-filters_check--block">
                      <input type = "checkbox" className = "catalog-filters_check--input"/>
                      <span className = "catalog-filters_check--label">2000-3000</span>
                    </span>
                  </span>
                </label>
                <label className ="catalog-filters_check">
                  <span className = "catalog-filters_check--left">
                    <span className = "catalog-filters_check--block">
                      <input type = "checkbox" className = "catalog-filters_check--input"/>
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
                      <input type = "checkbox" className = "catalog-filters_check--input"/>
                      <span className = "catalog-filters_check--label">только с фотографией</span>
                    </span>
                  </span>
                </label>
              </div>
            </div>        
          </div>
        </aside>
        <div className = "all-items">
          <div className = "filter-type">
            <button className ="filter-table"/>
            <button className ="filter-list"/>           
          </div>
          <div className = "all-items-block hide-on-mobile">
            <div className = "item-container">
              <div className = "item-block">
                <span className = "item1"/>              
              </div>
              <button className = "item-block__favorite" title = "Добавить в Избранное"/>
              <div className = "item-block__info-container">
                <div className = "item-block__name"> Кардиган </div>
                <div className = "item-block__master-name"> Sewing company </div>
                <div className = "item-block__payment-container">
                  <div className = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button className="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div className = "item-container">
              <div className = "item-block">
                <span className = "item1"/>              
              </div>
              <button className = "item-block__favorite" title = "Добавить в Избранное"/>
              <div className = "item-block__info-container">
                <div className = "item-block__name"> Кардиган </div>
                <div className = "item-block__master-name"> Sewing company </div>
                <div className = "item-block__payment-container">
                  <div className = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button className="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div className = "item-container">
              <div className = "item-block">
                <span className = "item1"/>              
              </div>
              <button className = "item-block__favorite" title = "Добавить в Избранное"/>
              <div className = "item-block__info-container">
                <div className = "item-block__name"> Кардиган </div>
                <div className = "item-block__master-name"> Sewing company </div>
                <div className = "item-block__payment-container">
                  <div className = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button className="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "all-items-list show-on-mobile">
            <div className = "item-container-list">
              <div className = "item-list">
                <span className = "item1"/>              
              </div>
              <div className = "item-list_info-container">
                <div className = "item-list_name"> Кардиган </div>
                <div className = "item-list__master-name"> Sewing company </div>
              </div>
                <div className = "item-list__payment-container">
                  <div className = "item-list__cost">
                    <div style={{width: "100px", position: "absolute", right: "0px", top: "0px"}}>1200 руб</div>
                    <div className="item-list__basketblock">
                      <button className = "item-list__favorite" title = "Добавить в Избранное"/>
                      <button className="item-list__to-basket" title="Положить в корзину товар">В корзину</button>
                    </div>
                  </div>
                </div>
            </div>
            <div className = "item-container-list">
              <div className = "item-list">
                  <span className = "item1"/>              
                </div>
                <div className = "item-list_info-container">
                  <div className = "item-list_name"> Кардиган </div>
                  <div className = "item-list__master-name"> Sewing company </div>
                </div>
                  <div className = "item-list__payment-container">
                    <div className = "item-list__cost">
                      <div style={{width: "100px", position: "absolute", right: "0px", top: "0px"}}>1200 руб</div>
                      <div className="item-list__basketblock">
                        <button className = "item-list__favorite" title = "Добавить в Избранное"/>
                        <button className="item-list__to-basket" title="Положить в корзину товар">В корзину</button>
                      </div>
                    </div>
                  </div>
            </div>
            <div className = "item-container-list">
              <div className = "item-list">
                  <span className = "item1"/>              
                </div>
                <div className = "item-list_info-container">
                  <div className = "item-list_name"> Кардиган </div>
                  <div className = "item-list__master-name"> Sewing company </div>
                </div>
                  <div className = "item-list__payment-container">
                    <div className = "item-list__cost">
                      <div style={{width: "100px", position: "absolute", right: "0px", top: "0px"}}>1200 руб</div>
                      <div className="item-list__basketblock">
                        <button className = "item-list__favorite" title = "Добавить в Избранное"/>
                        <button className="item-list__to-basket" title="Положить в корзину товар">В корзину</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
