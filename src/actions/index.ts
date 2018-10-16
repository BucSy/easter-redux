import {
    FAVOURITE_DATA,
    GET_LOCKER_DATA
 } from './types';

export const favouriteData = () => {
    return {
        type: FAVOURITE_DATA
    }
}

export const lockerData = () => {
    return {
        type: GET_LOCKER_DATA
    }
}