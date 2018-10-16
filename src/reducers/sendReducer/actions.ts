import { SEND_DATA_REQUEST, SET_MSG_TYPE, SET_MSG_TEXT, SET_ERROR_TO_NULL } from '../../actions/types';

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