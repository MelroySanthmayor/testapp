
const initialState={
    "List":[1,2,3,4,5],
    "details":{
    "1": {
        "product": "Widget1",
        "qty": 10,
        "price": 11.23
      },
      "2": {
        "product": "Widget1",
        "qty": 2,
        "price": 21.23
      },
      "3": {
        "product": "Widget1",
        "qty": 3,
        "price": 31.23
      },
      "4": {
        "product": "Widget1",
        "qty": 4,
        "price": 41.23
      },
      "5": {
        "product": "Widget1",
        "qty": 5,
        "price": 51.23
      }
    }
}
/*const todo =( state, action)=>{
    switch(action.type){
        case Item:
            return{
                product:action.product,
                qty:action.qty,
                price:action.price
            };
    }
}*/
export default function addItemsReducer(state=initialState , action) {
    switch (action.type) {
        case 'Item':
            return {
                ...state,
                details:{
                    ...state.details,
                    [action.id]:{
                
                        
                    product:action.product,  // [`${action.id+1}`]:{
                    qty:action.qty,
                    price:action.price
                }
            
            }
            };

        default:
            return state;
    }
}
