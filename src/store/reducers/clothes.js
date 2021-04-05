const initialState = {
    userName:'Петр Петрович',
    userCity:'Санкт-Петербург',
    userFavorites:["1","5","7"],
    userItems:["2","8","3"],
    userBasket:["4","6"],
    sellers:[
        {
            id: "1",
            name: "Sewing company",
            city: "Санкт-Петербург",
        },
        {
            id: "2",
            name: "Clothes for you",
            city: "Москва",
        },
        {
            id: "3",
            name: "Wear clothes",
            city: "Екатеринбург",
        },
    ],

    items: [
        {
          id: "1",
          name: "Кардиган",
          sellerId: "1",
          price: "1900",
          photo: "/item1.jpg",
          size: "44-56",
          fabric: "merino wool",
          year: "2020"
        },
        {
          id: "2",
          name: "Свитер",
          sellerId: "1",
          price: "1900",
          photo: "/item2.jpg",
          size: "44-56",
          fabric: "cotton",
          year: "2021"
        },    
        {
          id: "3",
          name: "Кофта",
          sellerId: "2",
          price: "2200",
          photo: "/item3.jpg",
          size: "44-48",
          fabric: "wool",
          year: "2020"
        },   
        {
          id: "4",
          name: "Бадлон",
          sellerId: "3",
          price: "1100",
          photo: "/item4.jpg",
          size: "44-52",
          fabric: "merino wool",
          year: "2020"
        },
        {
          id: "5",
          name: "Свитер",
          sellerId: "2",
          price: "2000",
          photo: "/item5.jpg",
          size: "44-48",
          fabric: "cotton",
          year: "2019"
        },
        {
          id: "6",
          name: "Кардиган",
          sellerId: "3",
          price: "2700",
          photo: "/item6.jpg",
          size: "44-50",
          fabric: "wool",
          year: "2020"
        },
        {
          id: "7",
          name: "Кофта",
          sellerId: "1",
          price: "1500",
          photo: "/item7.jpg",
          size: "44-48",
          fabric: "wool",
          year: "2020"
        },
        {
          id: "8",
          name: "Свитер теплый",
          sellerId: "2",
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