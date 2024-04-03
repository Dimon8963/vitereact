import { INCREMENT_HEART_CLICKS } from './actions';

const initialState = {
    heartClicks: 0
};

const heartClicksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_HEART_CLICKS':
            return {
                ...state,
                heartClicks: state.heartClicks + 1
            };
        case 'DECREMENT_HEART_CLICKS':
            return {
                ...state,
                heartClicks: state.heartClicks - 1
            };
        default:
            return state;
    }
};

export default heartClicksReducer;