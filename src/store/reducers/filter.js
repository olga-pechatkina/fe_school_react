const initialState = {
    filterCity: ["Москва", "Санкт-Петербург", "Екатеринбург"],
    filterYear: ["2020", "2021"],
    filterPrice: ["0-1000","1000-2000","2000-3000","больше 3000"],
    filterWithPhoto: ["только с фотографией"],
    selectedFilters: {
      city: [],
      year: [],
      price: [],
      minPrice: [],
      maxPrice: [],
      withPhoto: [],
    },
    }
  
   export default function clothes (state = initialState, action){
     switch (action.type) {
        case 'HANDLE_FILTER':
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
      default:
       return state
     }
   }