import { 
    SEND_DATA_REQUEST,
    SEND_DATA_SUCCESS,
    SEND_DATA_FAILURE,
    SET_MSG_TYPE,
    SET_MSG_TEXT
 } from '../actions/types';
import Immutable, { isImmutable } from 'seamless-immutable';

const initalizeState = Immutable({
    loading: false,
    error: false,
    msgType: "hiba",
    msgText: null,
    editable: true,
});

export default (state = initalizeState, action) => {
    switch(action.type) {
        case SEND_DATA_REQUEST:
            return {...state, loading: true, error: false, editable: false}
        case SEND_DATA_SUCCESS:
            return {...state, loading: false, error: false, editable: true}
        case SEND_DATA_FAILURE:
            return {...state, loading: false, error: true, editable: true}
        case SET_MSG_TYPE:
            return {...state, loading: false, error: false, msgType: action._msgType}
        case SET_MSG_TEXT:
            return {...state, loading: false, error: false, msgText: action._msgText}
        default:
            return state
    }
}