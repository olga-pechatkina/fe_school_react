const Basket = () =>  (
    <div className="Basket">
        <div className ="App-header__ins">
            <a href="/">
                <div className = "logo"/>
            </a>
            <h1>Корзина</h1>
            <button type="button" className="btn-rubrics-mobile-view">Оформить покупку</button>
        </div>
        <div className = "all-items-list">
          <div className = "item-container-list">
            <div className = "item-list">
               <span>         
                  <img className="item1-list" src="/item1.jpg" alt =""/>
               </span>             
            </div>
            <div className = "item-list_info-container">
              <div className = "item-list_name"> Кардиган </div>
              <div className = "item-list__master-name"> Sewing company </div>
            </div>
            <div className= "cmaster-cart-items__item-quantity">
                <button className="master-cart-items__item-btn master-cart-items__item-btn--minus" type="button">
                    <span className="master-cart-items__item-icon-minus"/>
                </button>
                <input type="number" min="1" max="1000" value="1" maxlength="3" className="master-cart-items__item-quantity-counter" style={{width: "20px"}}></input>
                <button class="master-cart-items__item-btn master-cart-items__item-btn--plus" type="button">
                    <span class="master-cart-items__item-icon-plus"/>
                </button>
            </div>
            <div className = "item-list__cost_basket">1200 руб</div>
          </div>
          <div className = "item-container-list">
            <div className = "item-list">
              <span>         
                <img className="item1-list" src="/item2.jpg" alt =""/>
              </span>              
            </div>
            <div className = "item-list_info-container">
              <div className = "item-list_name"> Кардиган </div>
              <div className = "item-list__master-name"> Sewing company </div>
            </div>
            <div className= "cmaster-cart-items__item-quantity">
                <button className="master-cart-items__item-btn master-cart-items__item-btn--minus" type="button">
                    <span className="master-cart-items__item-icon-minus"/>
                </button>
                <input type="number" min="1" max="1000" value="1" maxlength="3" className="master-cart-items__item-quantity-counter" style={{width: "20px"}}></input>
                <button class="master-cart-items__item-btn master-cart-items__item-btn--plus" type="button">
                    <span class="master-cart-items__item-icon-plus"/>
                </button>
            </div>
            <div className = "item-list__cost_basket">1700 руб</div>
          </div>
        </div>
    </div>
  )
  export default Basket;
  