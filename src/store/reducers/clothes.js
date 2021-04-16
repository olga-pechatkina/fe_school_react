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
        sellerId: 1,
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
    case 'CHANGE_ITEM' :
      let name = action.val[0];
      let price = action.val[1];
      let id = state.items.indexOf(state.items.find(it => it.id === action.payload));
      let newItem= {...state.items[id], name:name, price:price};
      let newItems = [...state.items]
      newItems[id] = newItem;
      return  {...state, items: newItems};  
    case 'ADD_FILTER' :
      action.value = [...state[action.payload]];
      action.value[action.val] = !action.value[action.val]    
      return {...state, 'action.payload': action.value}
    default:
     return state
   }
 }