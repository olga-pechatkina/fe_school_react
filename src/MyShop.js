const MyShop = () =>  (
    <div className="MyShop">
        <div className ="App-header">
            <a href="/">
                <div className = "logo"/>
            </a>
            <h1>Магазин</h1>
        </div>
        <div className = "all-items-block">
          <div className = "item-container">
            <div className = "item-block">
              <span className = "item1"/>              
            </div>
            <button className = "item-block__edit" title = "Редактировать"/>
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
              <span className = "item1"/>              
            </div>
            <button className = "item-block__edit" title = "Редактировать"/>
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
              <span className = "item1"/>              
            </div>
            <button className = "item-block__edit" title = "Редактировать"/>
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
        </div>
    </div>
  )
  export default MyShop;
  