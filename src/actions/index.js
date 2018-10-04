import { 
    GETDATA,
    FAVDATA,
    NEW_FAVDATA,
    DEL_FAVDATA,
    SET_ARTICLE_TEXT,
    SET_ARTICLE_KATEG,
    ITEM_SELECTED,
    SEND_DATA_SUCCESS,
    SEND_DATA_REQUEST,
    SEND_DATA_FAILURE,
    SET_MSG_TYPE,
    SET_MSG_TEXT
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

export const sendDataToSrv = (_msgType, _msg) => {
    return{
        type: SEND_DATA_REQUEST,
        msgType: _msgType,
        msg: _msg
    };
}

export const setMsgType = (msgType,) => {
    return{
        type: SET_MSG_TYPE,
        _msgType: msgType,
    };
}

export const setMsgText = (msgText) => {
    return{
        type: SET_MSG_TEXT,
        _msgText: msgText
    };
}