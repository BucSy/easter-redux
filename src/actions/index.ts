import { 
    GETDATA,
    FAVDATA,
    NEW_FAVDATA,
    DEL_FAVDATA,
    SET_ARTICLE_TEXT,
    SET_ARTICLE_KATEG,
    ITEM_SELECTED,
    SEND_DATA_REQUEST,
    SET_MSG_TYPE,
    SET_MSG_TEXT,
    SET_ERROR_TO_NULL,
    SHOW_SORT_BY_PRICE,
    SHOW_SORT_BY_SIZE
 } from './types';

export const getData = (poemData: any) => {
    return {
        type: GETDATA,
        poemData
    };
}

export const getFavData = (favouriteData: any) => {
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

export const setArticleText = (articleText: string) => {
    return {
        type: SET_ARTICLE_TEXT,
        articleText,
    };
}

export const setArticleKateg = (articleKateg: string) => {
    return {
        type: SET_ARTICLE_KATEG,
        articleKateg,
    };
}

export const setSelectedItem = (selectedItem: string) => {
    return {
        type: ITEM_SELECTED,
        selectedItem
    };
}

export const sendDataToSrv = (msgType: string, msgText: string) => {
    return{
        type: SEND_DATA_REQUEST,
        msgType,
        msgText
    };
}

export const setMsgType = (msgType: string) => {
    return{
        type: SET_MSG_TYPE,
        msgType,
    };
}

export const setMsgText = (msgText: string) => {
    return{
        type: SET_MSG_TEXT,
        msgText
    };
}

export const setErrorNull = () => {
    return {
        type: SET_ERROR_TO_NULL
    }
}

export const showSortByPrice = () => {
    return {
        type: SHOW_SORT_BY_PRICE
    }
}

export const showSortBySize = () => {
    return {
        type: SHOW_SORT_BY_SIZE
    }
}