export interface poemDataType { kateg: string; vers: string; }
export interface lockerDataType { size: string, durationMinutes: number, price: number }

import { 
    GETDATA,
    FAVDATA,
    NEW_FAVDATA,
    DEL_FAVDATA,
    GET_LOCKER_DATA_SUCCESS,
 } from '../../actions/types';
import produce from 'immer';

export interface dataState {
    data: poemDataType[]
    favData: string[],
    lockerData: lockerDataType[],
}

const initalizeState: dataState = {
    data: [],
    favData: [],
    lockerData: [],
};

export default (state = initalizeState, action: {type: string, poemData: poemDataType[], newFavouriteData: string, delFavouriteData: number, favouriteData: string[], payload: lockerDataType[]}) => 
    produce(state, draft => {
        switch(action.type) {
            case GETDATA:
                draft.data.push(...action.poemData);
                break;
            case FAVDATA:
                draft.favData.push(...action.favouriteData);
                break;
            case NEW_FAVDATA:
                draft.favData.push(action.newFavouriteData);
                break;
            case DEL_FAVDATA:
                return {...state, favData: [
                    ...state.favData.slice(0, action.delFavouriteData),
                    ...state.favData.slice(action.delFavouriteData + 1)
                ]}
            case GET_LOCKER_DATA_SUCCESS:
                draft.lockerData.push(...action.payload);
                break;
            default:
                return state;
        }
})

