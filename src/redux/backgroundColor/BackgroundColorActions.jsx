import { CHANGE_BACKGROUND_COLOR } from './BackgroundColorConstants';

export const changeBackgroundColor = payload => {
    return {
        type: CHANGE_BACKGROUND_COLOR,
        payload
    }
};