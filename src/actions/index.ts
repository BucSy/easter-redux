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
    SET_MSG_TEXT,
    SET_ERROR_TO_NULL
 } from './types';

export const getData = (_data: Array<Object>) => {
    return {
        type: GETDATA,
        payload: _data
    };
}

export const getFavData = (_data: Array<Object>) => {
    return {
        type: FAVDATA,
        payload: _data
    };
}

export const newFavData = (_data: string) => {
    return {
        type: NEW_FAVDATA,
        payload: _data
    };
}

export const deleteFavData = (_data: number) => {
    return {
        type: DEL_FAVDATA,
        payload: _data
    };
}

export const setArticleText = (_articleText: string) => {
    return {
        type: SET_ARTICLE_TEXT,
        payload: _articleText,
    };
}

export const setArticleKateg = (_articleKateg: string) => {
    return {
        type: SET_ARTICLE_KATEG,
        payload: _articleKateg,
    };
}

export const setSelectedItem = (_selectedItem: string) => {
    return {
        type: ITEM_SELECTED,
        payload: _selectedItem
    };
}

export const sendDataToSrv = (_msgType: string, _msg: string) => {
    return{
        type: SEND_DATA_REQUEST,
        msgType: _msgType,
        msg: _msg
    };
}

export const setMsgType = (msgType: string) => {
    return{
        type: SET_MSG_TYPE,
        _msgType: msgType,
    };
}

export const setMsgText = (msgText: string) => {
    return{
        type: SET_MSG_TEXT,
        _msgText: msgText
    };
}

export const setErrorNull = () => {
    return {
        type: SET_ERROR_TO_NULL
    }
}