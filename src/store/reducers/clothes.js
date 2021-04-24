const initialState = {
  filterCity: ["Москва", "Санкт-Петербург", "Екатеринбург"],
  filterYear: ["2020", "2021"],
  filterPrice: ["0-1000","1000-2000","2000-3000","больше 3000"],
  filterWithPhoto: ["только с фотографией"],
  // filterCitySelected: [false,false,false],
  // filterYearSelected: [false,false],
  // filterPriceSelected: [false,false,false,false],
  //filterPriceMinSelected: [],
  //filterPriceMaxSelected: [],      
  //filterWithPhotoSelected: [false],
  selectedFilters: {
    city: [],
    year: [],
    price: [],
    minPrice: [],
    maxPrice: [],
    withPhoto: [],
  },
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
      price: 1900,
      photo: "/item1.jpg",
      size: "44-56",
      fabric: "merino wool",
      year: "2020",
      city: "Санкт-Петербург",
    },
    {
      id: 2,
      name: "Свитер",
      sellerId: 1,
      price: 1900,
      photo: "/item2.jpg",
      size: "44-56",
      fabric: "cotton",
      year: "2021",
      city: "Санкт-Петербург",
    },    
    {
      id: 3,
      name: "Кофта",
      sellerId: 2,
      price: 2200,
      photo: "/item3.jpg",
      size: "44-48",
      fabric: "wool",
      year: "2020",
      city: "Москва",
    },   
    {
      id: 4,
      name: "Бадлон",
      sellerId: 3,
      price: 1100,
      photo: "/item4.jpg",
      size: "44-52",
      fabric: "merino wool",
      year: "2020",
      city: "Екатеринбург",
    },
    {
      id: 5,
      name: "Свитер",
      sellerId: 2,
      price: 2000,
      photo: "/item5.jpg",
      size: "44-48",
      fabric: "cotton",
      year: "2019",
      city: "Москва",
    },
    {
      id: 6,
      name: "Кардиган",
      sellerId: 3,
      price: 2700,
      photo: "/item6.jpg",
      size: "44-50",
      fabric: "wool",
      year: "2020",
      city: "Екатеринбург",
    },
    {
      id: 7,
      name: "Кофта",
      sellerId: 1,
      price: 1500,
      photo: "/item7.jpg",
      size: "44-48",
      fabric: "wool",
      year: "2020",
      city: "Санкт-Петербург",
    },
    {
      id: 8,
      name: "Свитер теплый",
      sellerId: 2,
      price: 2500,
      photo: "/item8.jpg",
      size: "44-48",
      fabric: "merino wool",
      year: "2020",
      city: "Москва",
    },
    {
      id: 17,
      name: "Свитер теплый",
      sellerId: 2,
      price: 2300,
      photo: null,
      size: "44-48",
      fabric: "merino wool",
      year: "2020",
      city: "Москва",
    },
    ]
  }

  const filterState = (items, filters) => {
    let tempItems = items;
    if (filters['city'].length > 0){
      tempItems = items.filter(item => (filters['city'].includes(item.city)));
    }
    if (filters['year'].length > 0){
      tempItems = tempItems.filter(item => (filters['year'].includes(item.year)));
    }
    if (filters['withPhoto'].length > 0){
      tempItems = tempItems.filter(item => item.photo);
    }
    return tempItems
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
    case 'STORE_FILTER' :
      const tempItems = filterState(initialState.items, action.payload);
      return{
        ...state,
        items: tempItems
      }        
    default:
     return state
   }
 }