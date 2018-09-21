import { 
    GETDATA,
    FAVDATA,
    NEW_FAVDATA,
    DEL_FAVDATA
 } from '../actions/types';

const initalizeState = {
    data: [],
    favData: [],
}

export default (state = initalizeState, action) => {
    switch(action.type) {
        case GETDATA:
            return {...state, data: [...action.payload]};
        case FAVDATA:
            return {...state, favData: [...action.payload]};
        case NEW_FAVDATA:
            return {...state, favData: [...state.favData, action.payload]};
        case DEL_FAVDATA:
            return {...state, favData: [
                ...state.favData.slice(0, action.payload),
                ...state.favData.slice(action.payload + 1)
            ]}
        default:
            return state;
    }
}