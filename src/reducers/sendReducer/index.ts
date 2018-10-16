import { 
    SEND_DATA_REQUEST,
    SEND_DATA_SUCCESS,
    SEND_DATA_FAILURE,
    SET_MSG_TYPE,
    SET_MSG_TEXT,
    SET_ERROR_TO_NULL
 } from '../../actions/types';
import Immutable from 'seamless-immutable';

export interface sendState {
    readonly loading: boolean
    readonly error: boolean
    readonly errorText: string
    readonly msgType: string
    readonly msgText: string
    readonly editable: boolean
}

const initialState: sendState = Immutable({
    loading: false,
    error: false,
    errorText: "",
    msgType: "hiba",
    msgText: "",
    editable: true,
});

export default (state = initialState, action: {type: string, msgType: string, msgText: string, payload: string}) => {
    switch(action.type) {
        case SEND_DATA_REQUEST:
            return {...state, loading: true, error: false, editable: false, errorText: null}
        case SEND_DATA_SUCCESS:
            return {...state, loading: false, error: false, editable: true, errorText: null}
        case SEND_DATA_FAILURE:
            return {...state, loading: false, error: true, editable: true, errorText: action.payload}
        case SET_MSG_TYPE:
            return {...state, loading: false, error: false, msgType: action.msgType, errorText: null}
        case SET_MSG_TEXT:
            return {...state, loading: false, error: false, msgText: action.msgText, errorText: null}
        case SET_ERROR_TO_NULL:
            return {...state, error: false, errorText: null}
        default:
            return state
    }
}