import { CHANGE_BACKGROUND_COLOR } from './BackgroundColorConstants';

const initialState = {
    backgroundColor: '#fff2e6s'
};

export function changeBackgroundColorReducer(state=initialState, action){
    switch(action.type){
        case CHANGE_BACKGROUND_COLOR:
            return {
                ...state,
                backgroundColor: action.payload
            };
        default:
            return state;
    }
}