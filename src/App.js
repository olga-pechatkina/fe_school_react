import './App.css';

function App() {
  return (
    <div className="App">
      <div class ="App-header">
        <div class = "logo"></div>
        <div class = "contacts"></div>
        <div class = "header-usermenu">
          <ul class = "header__nav-list">
            <li class = "favorites header__nav-item">
              <button type ="button" class = "button_fav">
                <span class="fav_icon">
                  </span>   
                </button>
            </li>  
            <div class = "profile header__nav-block">
              <div class = "header-btn-entry">
                <span class = "header-btn-entry__icon">
                </span>
              </div>
            </div>
            <li class = "header__nav-item">
              <div class = "header-basket">
                  <span class = "header-basket__icon">
                  </span>
                </div>  
            </li>   
          </ul>
        </div>  
      </div>
      <div class="menu">
          <div class = "menu-item">Одежда и аксессуары</div>
          <div class = "menu-item">Обувь</div>
          <div class = "menu-item">Красота и уход</div>
          <div class = "menu-item">Все для дома</div>
          <div class = "menu-item">Для детей</div>
      </div>
      <div>
            <span class = "banner"></span>
      </div>
      <div class = "catalog">     
        <aside id = "filter-panel-left">
        <div class = "catalog-filters-list">      
            <div class = "catalog-filters-item">
              <div class = "catalog-filters-box_top">
                <span class = "catalog-filters-box_name">
                  Город
                </span>
              </div>
              <div class = "catalog-filters-box_content">
                <label class ="catalog-filters_check">
                  <span class = "catalog-filters_check--left">
                    <span class = "catalog-filters_check--block">
                      <input type = "checkbox" class = "catalog-filters_check--input"></input>
                      <span class = "catalog-filters_check--label">Москва</span>
                      </span>
                  </span>
                </label>
                <label class ="catalog-filters_check">
                  <span class = "catalog-filters_check--left">
                    <span class = "catalog-filters_check--block">
                      <input type = "checkbox" class = "catalog-filters_check--input"></input>
                      <span class = "catalog-filters_check--label">Санкт-Петербург</span>
                      </span>
                  </span>
                </label>
                <label class ="catalog-filters_check">
                  <span class = "catalog-filters_check--left">
                    <span class = "catalog-filters_check--block">
                      <input type = "checkbox" class = "catalog-filters_check--input"></input>
                      <span class = "catalog-filters_check--label">Нижний Новгород</span>
                      </span>
                  </span>
                </label>
              </div>
            </div>
            <div class = "catalog-filters-item">
              <div class = "catalog-filters-box_top">
                <span class = "catalog-filters-box_name">
                  Коллекция год
                </span>
              </div>
              <div class = "catalog-filters-box_content">
                <label class ="catalog-filters_check">
                  <span class = "catalog-filters_check--left">
                    <span class = "catalog-filters_check--block">
                      <input type = "checkbox" class = "catalog-filters_check--input"></input>
                      <span class = "catalog-filters_check--label">2021</span>
                      </span>
                  </span>
                </label>
                <label class ="catalog-filters_check">
                  <span class = "catalog-filters_check--left">
                    <span class = "catalog-filters_check--block">
                      <input type = "checkbox" class = "catalog-filters_check--input"></input>
                      <span class = "catalog-filters_check--label">2020</span>
                      </span>
                  </span>
                </label>
              </div>
            </div>
            <div class = "catalog-filters-item">
              <div class = "catalog-filters-box_top">
                <span class = "catalog-filters-box_name">
                  Цена
                </span>
              </div>
              <div class = "catalog-filters-box_content">
                <label class ="catalog-filters_check">
                  <span class = "catalog-filters_check--left">
                    <span class = "catalog-filters_check--block">
                      <input type = "checkbox" class = "catalog-filters_check--input"></input>
                      <span class = "catalog-filters_check--label">0-1000</span>
                      </span>
                  </span>
                </label>
                <label class ="catalog-filters_check">
                  <span class = "catalog-filters_check--left">
                    <span class = "catalog-filters_check--block">
                      <input type = "checkbox" class = "catalog-filters_check--input"></input>
                      <span class = "catalog-filters_check--label">1000-2000</span>
                      </span>
                  </span>
                </label>
                <label class ="catalog-filters_check">
                  <span class = "catalog-filters_check--left">
                    <span class = "catalog-filters_check--block">
                      <input type = "checkbox" class = "catalog-filters_check--input"></input>
                      <span class = "catalog-filters_check--label">2000-3000</span>
                      </span>
                  </span>
                </label>
                <label class ="catalog-filters_check">
                  <span class = "catalog-filters_check--left">
                    <span class = "catalog-filters_check--block">
                      <input type = "checkbox" class = "catalog-filters_check--input"></input>
                      <span class = "catalog-filters_check--label">больше 3000</span>
                      </span>
                  </span>
                </label>
              </div>
            </div>            
          </div>
        </aside>
        <div class = "items">
            <div class = "item-container">
              <div class = "item-block">
              <span class = "item1"></span>              
              </div>
              <button class = "item-block__favorite" title = "Добавить в Избранное">xxx</button>
              <div class = "item-block__info-container">
                <div class = "item-block__name"> Кардиган </div>
                <div class = "item-block__master-name"> Sewing company </div>
                <div class = "item-block__payment-container">
                  <div class = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button class="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div class = "item-container">
              <div class = "item-block">
              <span class = "item1"></span>              
              </div>
              <div class = "item-block__info-container">
                <div class = "item-block__name"> Кардиган </div>
                <div class = "item-block__master-name"> Sewing company </div>
                <div class = "item-block__payment-container">
                  <div class = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button class="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div class = "item-container">
              <div class = "item-block">
              <span class = "item1"></span>              
              </div>
              <div class = "item-block__info-container">
                <div class = "item-block__name"> Кардиган </div>
                <div class = "item-block__master-name"> Sewing company </div>
                <div class = "item-block__payment-container">
                  <div class = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button class="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div class = "item-container">
              <div class = "item-block">
              <span class = "item1"></span>              
              </div>
              <div class = "item-block__info-container">
                <div class = "item-block__name"> Кардиган </div>
                <div class = "item-block__master-name"> Sewing company </div>
                <div class = "item-block__payment-container">
                  <div class = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button class="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div class = "item-container">
              <div class = "item-block">
              <span class = "item1"></span>              
              </div>
              <div class = "item-block__info-container">
                <div class = "item-block__name"> Кардиган </div>
                <div class = "item-block__master-name"> Sewing company </div>
                <div class = "item-block__payment-container">
                  <div class = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button class="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div class = "item-container">
              <div class = "item-block">
              <span class = "item1"></span>              
              </div>
              <div class = "item-block__info-container">
                <div class = "item-block__name"> Кардиган </div>
                <div class = "item-block__master-name"> Sewing company </div>
                <div class = "item-block__payment-container">
                  <div class = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button class="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div class = "item-container">
              <div class = "item-block">
              <span class = "item1"></span>              
              </div>
              <div class = "item-block__info-container">
                <div class = "item-block__name"> Кардиган </div>
                <div class = "item-block__master-name"> Sewing company </div>
                <div class = "item-block__payment-container">
                  <div class = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button class="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div class = "item-container">
              <div class = "item-block">
              <span class = "item1"></span>              
              </div>
              <div class = "item-block__info-container">
                <div class = "item-block__name"> Кардиган </div>
                <div class = "item-block__master-name"> Sewing company </div>
                <div class = "item-block__payment-container">
                  <div class = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button class="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div class = "item-container">
              <div class = "item-block">
              <span class = "item1"></span>              
              </div>
              <div class = "item-block__info-container">
                <div class = "item-block__name"> Кардиган </div>
                <div class = "item-block__master-name"> Sewing company </div>
                <div class = "item-block__payment-container">
                  <div class = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button class="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div class = "item-container">
              <div class = "item-block">
              <span class = "item1"></span>              
              </div>
              <div class = "item-block__info-container">
                <div class = "item-block__name"> Кардиган </div>
                <div class = "item-block__master-name"> Sewing company </div>
                <div class = "item-block__payment-container">
                  <div class = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button class="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div class = "item-container">
              <div class = "item-block">
              <span class = "item1"></span>              
              </div>
              <div class = "item-block__info-container">
                <div class = "item-block__name"> Кардиган </div>
                <div class = "item-block__master-name"> Sewing company </div>
                <div class = "item-block__payment-container">
                  <div class = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button class="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
            <div class = "item-container">
              <div class = "item-block">
              <span class = "item1"></span>              
              </div>
              <div class = "item-block__info-container">
                <div class = "item-block__name"> Кардиган </div>
                <div class = "item-block__master-name"> Sewing company </div>
                <div class = "item-block__payment-container">
                  <div class = "item-block__cost tobasket">
                    <span>1200 руб</span>
                    <button class="item-block__to-basket" title="Положить в корзину товар">В корзину</button>
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
