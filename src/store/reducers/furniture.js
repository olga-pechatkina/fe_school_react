const initialState = {
  filterCity: ["Москва", "Санкт-Петербург", "Екатеринбург"],
  filterYear: ["2020", "2021"],
  filterWithPhoto: ["только с фотографией"],
  selectedFilters: {
    city: [],
    year: [],
    price: [],
    withPhoto: [],
  },
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
          price: 7600,
          photo: "/furn1.jpg",
          size: "300-700",
          fabric: "дерево",
          year: "2020",
          city: "Санкт-Петербург"
        },
        {
          id: 10,
          name: "Тумба",
          sellerId: 4,
          price: 10500,
          photo: "/furn2.jpg",
          size: "1000-300",
          fabric: "дерево",
          year: "2021",
          city: "Санкт-Петербург"
        },    
        {
          id: 11,
          name: "Сервант",
          sellerId: 5,
          price: 9500,
          photo: "/furn3.jpg",
          size: "300-1300",
          fabric: "дерево",
          year: "2020",
          city: "Москва"
        },   
        {
          id: 12,
          name: "Тумба",
          sellerId: 6,
          price: 7000,
          photo: "/furn4.jpg",
          size: "300-600",
          fabric: "дерево",
          year: "2020",
          city: "Екатеринбург"
        },
        {
          id: 13,
          name: "Кресло",
          sellerId: 5,
          price: 12000,
          photo: "/furn5.jpg",
          size: "500-1500",
          fabric: "ткань",
          year: "2019",
          city: "Москва"
        },
        {
          id: 14,
          name: "Диван",
          sellerId: 6,
          price: 27000,
          photo: "/furn6.jpg",
          size: "2000-1500",
          fabric: "ткань",
          year: "2020",
          city: "Екатеринбург"
        },
        {
          id: 15,
          name: "Стул",
          sellerId: 4,
          price: 6500,
          photo: "/furn7.jpg",
          size: "400-1500",
          fabric: "дерево",
          year: "2020",
          city: "Санкт-Петербург"
        },
        {
          id: 16,
          name: "Стол",
          sellerId: 5,
          price: 2500,
          photo: "/furn8.jpg",
          size: "2000-1000",
          fabric: "дерево",
          year: "2020",
          city: "Москва"
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
      if (filters['price'].length === 2){
        if(filters['price'][0] || filters['price'][1]){
          tempItems = tempItems.filter(item => item.price >= filters['price'][0] && item.price <= filters['price'][1]);
        }
      }
      return tempItems
    }

    export default function furniture (state = initialState, action){
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
          const tempItems = filterState(initialState.items, state.selectedFilters);
          return{
            ...state,
            items: tempItems
          }

        case 'HANDLE_FILTER':
          if (action.store === "furniture") {
          let filters = state.selectedFilters[action.name];
          if (filters.includes(action.value)){
            filters = filters.filter(item => item !== action.value)
          } else {
            filters.push(action.value)
          }
          const selectedFilters = { ...state.selectedFilters, [action.name]: filters }
          return{
            ...state,
            selectedFilters: selectedFilters
          }
        }
        return state;
    
        case 'HANDLE_FILTER_NUM':
          if (action.store === "furniture") {
            let filtersNum = action.value
            const selectedFiltersNum = { ...state.selectedFilters, [action.name]: filtersNum }
            return{
              ...state,
              selectedFilters: selectedFiltersNum,
            }
          }
        return state;

        default:
          return state
      }
    }