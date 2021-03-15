const MyShop = () =>  (
    <div className="MyShop">
        <div className ="App-header__ins">
            <a href="/">
                <div className = "logo"/>
            </a>
            <h1>Избранное</h1>
        </div>
        <div className = "all-items-block-favorites">
          <div className = "item-container">
            <span>         
              <img className="item1" src="/item4.jpg" alt =""/>
            </span>
            <div className = "item-block__info-container">
              <div className = "item-block__name"> Кардиган </div>
              <div className = "item-block__master-name"> Sewing company </div>
              <div className = "item-block__payment-container">
                <div className = "item-block__cost tobasket">
                  <span>1200 руб</span>
                  <button className="item-block__to-basket" title="Положить в корзину товар">Удалить</button>
                </div>
              </div>
            </div>
          </div>
          <div className = "item-container">
            <div className = "item-block">
                <span>         
                <img className="item1" src="/item7.jpg" alt =""/>
                </span>           
            </div>
            <div className = "item-block__info-container">
              <div className = "item-block__name"> Кффта </div>
              <div className = "item-block__master-name"> Sewing company </div>
              <div className = "item-block__payment-container">
                <div className = "item-block__cost tobasket">
                  <span>1200 руб</span>
                  <button className="item-block__to-basket" title="Положить в корзину товар">Удалить</button>
                </div>
              </div>
            </div>
          </div>
          <div className = "item-container">
            <div className = "item-block">
                <span>         
                <img className="item1" src="/item1.jpg" alt =""/>
                </span>         
            </div>
            <div className = "item-block__info-container">
              <div className = "item-block__name"> Свитер </div>
              <div className = "item-block__master-name"> Sewing company </div>
              <div className = "item-block__payment-container">
                <div className = "item-block__cost tobasket">
                  <span>1200 руб</span>
                  <button className="item-block__to-basket" title="Положить в корзину товар">Удалить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
  export default MyShop;
  