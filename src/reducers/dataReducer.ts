import { 
    GETDATA,
    FAVDATA,
    NEW_FAVDATA,
    DEL_FAVDATA
 } from '../actions/types';
import Immutable, { isImmutable } from 'seamless-immutable';

export interface dataState {
    readonly data: { kateg: string, vers: string }[]
    readonly favData: string[]
}

const initalizeState = Immutable({
    data: [],
    favData: [],
});

export default (state = initalizeState, action: {type: string, payload: any}) => {
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