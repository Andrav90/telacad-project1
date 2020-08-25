import { createStore, combineReducers } from 'redux';
import { changeBackgroundColorReducer } from './backgroundColor/BackgroundColorReducer';
import { changeTextColorReducer } from './textColor/TextColorReducer';

const rootReducer = combineReducers({
    backgroundColor: changeBackgroundColorReducer,
    textColor: changeTextColorReducer,
});

const store = createStore(rootReducer);

export default store;