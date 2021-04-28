const initialState = {
    userIsSeller: false,
    userName:'Петр Петрович',
    userCity:'Санкт-Петербург',
    userToken:'',
    userFavorites:[1, 5, 7, 10],
    userItems:[2, 8, 3, 11],
    userBasket:[],
    userMessages:[{
      id: 1,
      date: "13 марта",
      from: "Sewing company",
      text: `Ваш размер есть в наличии. Рекомендуем выбрать цвет, который будет сочетаться с маджентовым.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },{
      id: 2,
      date: "14 марта",
      from: "Clothes for you",
      text: `Ваш размер есть в наличии. Рекомендуем выбрать цвет, который будет сочетаться с маджентовым.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
    ]}
  
   export default function user (state = initialState, action){
     switch (action.type) {
      case 'REMOVE_FAV' :
        action.value = state.userFavorites.filter(id => id !== action.payload);
        return {...state, userFavorites: action.value}
      case 'REMOVE_ITEM' :
        action.value = state.userItems.filter(id => id !== action.payload);
        return {...state, userItems: action.value}
      case 'CHANGE_USER_DATA' :
        let name = action.val[0];
        let city = action.val[1];
        return  {...state, userName: name, userCity: city}; 
      case 'ADD_TO_FAV' :
        action.value = [...state.userFavorites, action.payload];
        return  {...state, userFavorites: action.value}; 
      case 'ADD_TO_BASKET' :
        action.value = [...state.userBasket, action.payload];
        return  {...state, userBasket: action.value}; 
      case 'REM_FROM_BASKET' :
        let id = state.userBasket.indexOf(action.payload);
        state.userBasket.splice(id, 1);
        return  {...state, userBasket: state.userBasket};
      case 'SET_TOKEN' :
        let token = action.payload;
        return {...state, userToken: token}
        case 'SET_SELLER' :
          return {...state, userIsSeller: true}
      default:
       return state
     }
   }