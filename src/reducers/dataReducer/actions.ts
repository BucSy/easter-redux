import { GETDATA, FAVDATA, NEW_FAVDATA, DEL_FAVDATA, POEM_DATA } from '../../actions/types';
import { poemDataType } from './';

export const getData = (poemData: poemDataType[]) => {
    return {
        type: GETDATA,
        poemData
    };
}

export const setPoemData = () => {
    return {
        type: POEM_DATA
    }
}

export const getFavData = (favouriteData: string[]) => {
    return {
        type: FAVDATA,
        favouriteData
    };
}

export const newFavData = (newFavouriteData: string) => {
    return {
        type: NEW_FAVDATA,
        newFavouriteData
    };
}

export const deleteFavData = (delFavouriteData: number) => {
    return {
        type: DEL_FAVDATA,
        delFavouriteData
    };
}