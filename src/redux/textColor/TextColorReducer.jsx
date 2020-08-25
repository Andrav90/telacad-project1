import { CHANGE_TEXT_COLOR } from './TextColorConstants';

const initialState = {
    textColor: '#000000'
};

export function changeTextColorReducer(state=initialState, action){
    switch(action.type){
        case CHANGE_TEXT_COLOR:
            let newTextColor = action.payload
            return Object.assign({}, state, {
                textColor: newTextColor
            });
        default:
            return state;
    }
}