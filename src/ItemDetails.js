import { connect } from 'react-redux'
import ButtonMessage from "./ButtonMessage"
import {Link} from 'react-router-dom'

//TODO: read comments
const ItemDetails = (props) => {
  const item = props.items.find(it => it.id === +props.match.params.id);
  const seller = props.sellers.find(el => el.id === item?.sellerId);

  return (
  <div className="ItemDetails">
      <div className ="App-header__ins">
        <Link to="/">
            <div className = "logo"/>
        </Link>
        <div className = "header-usermenu">
          <ul className = "header__nav-list">
            <div className = "profile header__nav-block">
              <div className = "header-btn-entry">
                <Link to="/favorites">
                 <span className = "item-lk__favorite"/>
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
        <div style={{top: "5px", position: "relative", textAlign: "right"}}>
        {/* вот эта кнопка используется несколько раз. предлагаю ее и аналогничные ей вынести в отдельный компонент
        + кнопка внутри ссылки - плохо. у тебя есть возможность написать обработчик onClick, в который передать любой код,
         в том числе и редирект*/}
          <ButtonMessage seller ={seller}/>
        </div>
      </div>
      <span>
        {/*  если мы по какой-то причине не передаем сюда ничего, но имеем возможность попасть в этот раздел,
        предлагю проверять на пустоту и выводить сообщение об ошибке или хотя бы добавить оператор опц. послед-ти */}
        <img className="item1" style={{padding: "6px 0px", margin: "0px 5%"}} src={item?.photo} alt =""/>
      </span> 
      <div className = "info-LK">
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Продавец:</div>
              <div className = "info-LK-item-right">{seller?.name} </div>
          </div>
          <hr className = "line"/>
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Город:</div>
              <div className = "info-LK-item-right">{seller?.city}</div>
          </div>
          <hr className = "line"/>
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Материал:</div>
              <div className = "info-LK-item-right">{item?.fabric}</div>
          </div>
          <div className = "info-LK-item">
              <div className = "info-LK-item-left">Размеры:</div>
              <div className = "info-LK-item-right">{item?.size}</div>
          </div>
          <hr className = "line"/>
      </div>
    </div>
  );
}
    const mapStateToProps = state => {
      return {
          items: [...state.clothes.items, ...state.furniture.items],
          sellers: [...state.clothes.sellers, ...state.furniture.sellers],
      }
  }
  
  export default connect(mapStateToProps, null)(ItemDetails);
    