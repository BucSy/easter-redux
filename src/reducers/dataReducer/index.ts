export interface poemDataType { kateg: string; vers: string; }
export interface lockerDataType { size: string, durationMinutes: number, price: number }

import { 
    GETDATA,
    FAVDATA,
    NEW_FAVDATA,
    DEL_FAVDATA,
    GET_LOCKER_DATA_SUCCESS,
 } from '../../actions/types';
import Immutable from 'seamless-immutable';

export interface dataState {
    readonly data: poemDataType[]
    readonly favData: string[],
    readonly lockerData: lockerDataType[],
}

const initalizeState: dataState = Immutable({
    data: [],
    favData: [],
    lockerData: [],
});

export default (state = initalizeState, action: {type: string, poemData: poemDataType[], newFavouriteData: string, delFavouriteData: number, favouriteData: string[], payload: lockerDataType[]}) => {
    switch(action.type) {
        case GETDATA:
            return {...state, data: [...action.poemData]};
        case FAVDATA:
            return {...state, favData: [...action.favouriteData]};
        case NEW_FAVDATA:
            return {...state, favData: [...state.favData, action.newFavouriteData]};
        case DEL_FAVDATA:
            return {...state, favData: [
                ...state.favData.slice(0, action.delFavouriteData),
                ...state.favData.slice(action.delFavouriteData + 1)
            ]}
        case GET_LOCKER_DATA_SUCCESS:
            return {...state, lockerData: [...action.payload]};
        default:
            return state;
    }
}
