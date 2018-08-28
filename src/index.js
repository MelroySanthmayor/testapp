import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WrapperApp from './WrapperApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'
import addItemsReducer from './reducers/itemReducer'

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
const rootReducer = combineReducers({
    addItemsReducer,
    initialState,
    form: formReducer,
    
    

})

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
     <WrapperApp />
    </Provider>,
    document.getElementById('root')
   );


//ReactDOM.render(<WrapperApp />, document.getElementById('root'));
registerServiceWorker();
