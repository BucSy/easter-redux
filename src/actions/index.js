import { 
    GETDATA,
    FAVDATA,
    NEW_FAVDATA,
    DEL_FAVDATA,
    SET_ARTICLE_TEXT,
    SET_ARTICLE_KATEG,
    ITEM_SELECTED
 } from './types';

export const getData = (_data) => {
    return {
        type: GETDATA,
        payload: _data
    };
}

export const getFavData = (_data) => {
    return {
        type: FAVDATA,
        payload: _data
    };
}

export const newFavData = (_data) => {
    return {
        type: NEW_FAVDATA,
        payload: _data
    };
}

export const deleteFavData = (_data) => {
    return {
        type: DEL_FAVDATA,
        payload: _data
    };
}

export const setArticleText = (_articleText) => {
    return {
        type: SET_ARTICLE_TEXT,
        payload: _articleText,
    };
}

export const setArticleKateg = (_articleKateg) => {
    return {
        type: SET_ARTICLE_KATEG,
        payload: _articleKateg,
    };
}

export const setSelectedItem = (_selectedItem) => {
    return {
        type: ITEM_SELECTED,
        payload: _selectedItem
    };
}