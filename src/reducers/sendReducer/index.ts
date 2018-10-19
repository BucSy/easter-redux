import { 
    SEND_DATA_REQUEST,
    SEND_DATA_SUCCESS,
    SEND_DATA_FAILURE,
    SET_MSG_TYPE,
    SET_MSG_TEXT,
    SET_ERROR_TO_NULL
 } from '../../actions/types';
import produce from 'immer';

export interface sendState {
    loading: boolean
    error: boolean
    errorText: string
    msgType: string
    msgText: string
    editable: boolean
}

const initialState: sendState = {
    loading: false,
    error: false,
    errorText: "",
    msgType: "hiba",
    msgText: "",
    editable: true,
};

export default (state = initialState, action: {type: string, msgType: string, msgText: string, payload: string}) => 
    produce(state, draft => {
        switch(action.type) {
            case SEND_DATA_REQUEST:
                draft.loading = true;
                draft.error = false;
                draft.editable = false;
                draft.errorText = "";
                break;
            case SEND_DATA_SUCCESS:
                draft.loading = false;
                draft.error = false;
                draft.editable = true;
                draft.errorText = "";
                break;
            case SEND_DATA_FAILURE:
                draft.loading = false;
                draft.error = true;
                draft.editable = true;
                draft.errorText = action.payload;
                break;
            case SET_MSG_TYPE:
                draft.loading = false;
                draft.error = false;
                draft.msgType = action.msgType;
                draft.errorText = "";
                break;
            case SET_MSG_TEXT:
                draft.loading = false;
                draft.error = false;
                draft.msgText = action.msgText;
                draft.errorText = "";
                break;
            case SET_ERROR_TO_NULL:
                draft.error = false;
                draft.errorText = "";
            default:
                return state
        }
});
