import { 
    GETDATA,
    FAVDATA,
    NEW_FAVDATA,
    DEL_FAVDATA,
    GET_LOCKER_DATA,
 } from '../actions/types';
import Immutable from 'seamless-immutable';
import { createSelector } from 'reselect';

export interface dataState {
    readonly data: { kateg: string, vers: string }[]
    readonly favData: string[],
    readonly lockerData: { size: string, durationMinutes: number, price: number }[],
}

const initalizeState = Immutable({
    data: [],
    favData: [],
    lockerData: [],
});

const sizeSelector = (state: any) => state.dataR.lockerData;

export const selectorBySize = createSelector(
    sizeSelector,
    lockers => [].concat(lockers).sort(dynamicSort("size"))
)

export const selectorByPrice = createSelector(
    [selectorBySize, sizeSelector],
    lockers => [].concat(lockers).sort(dynamicSort("price"))
)

function dynamicSort(property: string) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a: any,b: any) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export default (state = initalizeState, action: {type: string, poemData: any, newFavouriteData: any, delFavouriteData: any, favouriteData: any, payload: any}) => {
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
        case GET_LOCKER_DATA:
            return {...state, lockerData: [...action.payload]};
        default:
            return state;
    }
}