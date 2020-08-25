import { CHANGE_TEXT_COLOR } from './TextColorConstants';

export const changeTextColor = (payload) => {
    console.log(payload)
    return {
        type: CHANGE_TEXT_COLOR,
        payload
    }
};