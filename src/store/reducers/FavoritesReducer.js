 
 const initialState = {
  products: [],
};
 export function favoritesReducer(state = initialState,action){

    switch (action.type) {
        case 'ADD_PRODUCT':
          // Ürün ekleme işlemi
          return {
            ...state,
            products: [...state.products, action.payload],
          };
        case 'REMOVE_PRODUCT':
          // Ürün silme işlemi 
          return {
            ...state,
            products: state.products.filter(product => product.id !== action.payload.id),
          };
        default:
          return state;
      }
    };

    
