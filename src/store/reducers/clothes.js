const initialState = {
  filterCity: ["Москва", "Санкт-Петербург", "Нижний Новгород"],
  filterYear: ["2020", "2021"],
  filterPrice: ["0-1000","1000-2000","2000-3000","больше 3000"],
  filterWithPhoto: ["только с фотографией"],
  filterCitySelected: [false,false,false],
  filterYearSelected: [false,false],
  filterPriceSelected: [false,false,false,false],
  filterPriceMinSelected: [],
  filterPriceMaxSelected: [],      
  filterWithPhotoSelected: [false],
  userIsSeller: true,
  userName:'Петр Петрович',
  userCity:'Санкт-Петербург',
  userFavorites:[1,5,7],
  userItems:[2,8,3],
  userBasket:[4,6],
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
  ],
  sellers:[
      {
          id: 1,
          name: "Sewing company",
          city: "Санкт-Петербург",
      },
      {
          id: 2,
          name: "Clothes for you",
          city: "Москва",
      },
      {
          id: 3,
          name: "Wear clothes",
          city: "Екатеринбург",
      },
  ],

  items: [
      {
        id: 1,
        name: "Кардиган",
        sellerId: 1, //TODO: лучше не строкой. строка в id это неудобно
        price: "1900",
        photo: "/item1.jpg",
        size: "44-56",
        fabric: "merino wool",
        year: "2020"
      },
      {
        id: 2,
        name: "Свитер",
        sellerId: 1,
        price: "1900",
        photo: "/item2.jpg",
        size: "44-56",
        fabric: "cotton",
        year: "2021"
      },    
      {
        id: 3,
        name: "Кофта",
        sellerId: 2,
        price: "2200",
        photo: "/item3.jpg",
        size: "44-48",
        fabric: "wool",
        year: "2020"
      },   
      {
        id: 4,
        name: "Бадлон",
        sellerId: 3,
        price: "1100",
        photo: "/item4.jpg",
        size: "44-52",
        fabric: "merino wool",
        year: "2020"
      },
      {
        id: 5,
        name: "Свитер",
        sellerId: 2,
        price: "2000",
        photo: "/item5.jpg",
        size: "44-48",
        fabric: "cotton",
        year: "2019"
      },
      {
        id: 6,
        name: "Кардиган",
        sellerId: 3,
        price: "2700",
        photo: "/item6.jpg",
        size: "44-50",
        fabric: "wool",
        year: "2020"
      },
      {
        id: 7,
        name: "Кофта",
        sellerId: 1,
        price: "1500",
        photo: "/item7.jpg",
        size: "44-48",
        fabric: "wool",
        year: "2020"
      },
      {
        id: 8,
        name: "Свитер теплый",
        sellerId: 2,
        price: "2500",
        photo: "/item8.jpg",
        size: "44-48",
        fabric: "merino wool",
        year: "2020"
      },
    ]
  }

 export default function clothes (state = initialState, action){
   switch (action.type) {
    case 'REMOVE_FAV' :
      action.value = state.userFavorites.filter(id => id !== action.payload);
      return {...state, userFavorites: action.value}
    case 'REMOVE_ITEM' :
      action.value = state.userItems.filter(id => id !== action.payload);
      return {...state, userItems: action.value}
    case 'CHANGE_ITEM' :
      let name = action.val[0].name;
      let price = action.val[0].price;
      let id = state.items.indexOf(state.items.find(it => it.id === action.payload))
     /* state.items[action.payload].name = name;
      state.items[action.payload].price = price;      */
      return  {...state, ...state.items[id], name: name, price: price};  
    case 'ADD_FILTER' :
    //  action.value = state[action.payload].map((item, id) => if)[action.val]
      action.value = [...state[action.payload]];
      action.value[action.val] = !action.value[action.val]    
      return {...state, 'action.payload': action.value}
    case 'CHANGE_USER_DATA' :
      name = action.val[0].userName;
      let city = action.val[0].userCity;
      return  {...state, userName: name, userCity: city}; 
    case 'ADD_TO_FAV' :
      action.value = [...state.userFavorites, action.payload];
      return  {...state, userFavorites: action.value}; 
    case 'ADD_TO_BASKET' :
        action.value = [...state.userBasket, action.payload];
        return  {...state, userBasket: action.value}; 
    default:
     return state
   }
 }
/*
const Slice = createSlice({
  name: 'marketplace',
  initialState,
  reducers: {
    removefromFav(state, action) {
      state.userFavorites = state.userFavorites.splice(state.userFavorites.find(it=>it === action.payload),1);
    }
  }
})

export const {removefromFav} = Slice.actions

export const store = configureStore({
  reducer: Slice.reducer
})*/