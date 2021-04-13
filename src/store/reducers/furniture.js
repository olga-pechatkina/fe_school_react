const initialState = {
    sellers:[
        {
            id: 4,
            name: "Furniture",
            city: "Санкт-Петербург",
        },
        {
            id: 5,
            name: "Moebelhaus",
            city: "Москва",
        },
        {
            id: 6,
            name: "Chairs etc",
            city: "Екатеринбург",
        },
    ],
  
    items: [
        {
          id: 9,
          name: "Стул",
          sellerId: 4,
          price: "7600",
          photo: "/furn1.jpg",
          size: "300-700",
          fabric: "дерево",
          year: "2020"
        },
        {
          id: 10,
          name: "Тумба",
          sellerId: 4,
          price: "10500",
          photo: "/furn2.jpg",
          size: "1000-300",
          fabric: "дерево",
          year: "2021"
        },    
        {
          id: 11,
          name: "Сервант",
          sellerId: 5,
          price: "9500",
          photo: "/furn3.jpg",
          size: "300-1300",
          fabric: "дерево",
          year: "2020"
        },   
        {
          id: 12,
          name: "Тумба",
          sellerId: 6,
          price: "7000",
          photo: "/furn4.jpg",
          size: "300-600",
          fabric: "дерево",
          year: "2020"
        },
        {
          id: 13,
          name: "Кресло",
          sellerId: 5,
          price: "12000",
          photo: "/furn5.jpg",
          size: "500-1500",
          fabric: "ткань",
          year: "2019"
        },
        {
          id: 14,
          name: "Диван",
          sellerId: 6,
          price: "27000",
          photo: "/furn6.jpg",
          size: "2000-1500",
          fabric: "ткань",
          year: "2020"
        },
        {
          id: 15,
          name: "Стул",
          sellerId: 4,
          price: "6500",
          photo: "/furn7.jpg",
          size: "400-1500",
          fabric: "дерево",
          year: "2020"
        },
        {
          id: 16,
          name: "Стол",
          sellerId: 5,
          price: "2500",
          photo: "/furn8.jpg",
          size: "2000-1000",
          fabric: "дерево",
          year: "2020"
        },
      ]
    }

    export default function furniture (state = initialState, action){
      switch (action.type) {
      /* case 'REMOVE_FAV' :
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
   /*      return  {...state, ...state.items[id], name: name, price: price};  
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
           return  {...state, userBasket: action.value}; */
       default:
        return state
      }
    }