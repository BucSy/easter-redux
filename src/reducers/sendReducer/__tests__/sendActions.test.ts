import * as actions from '../actions';
import * as types from '../../../actions/types';

describe('Send Action test', () => {
    it('sendDataToSrv', () => {
        const msgType: string = "something";
        const msgText: string = "something";
        const sendAction = {
            type: types.SEND_DATA_REQUEST,
            msgType,
            msgText
        }
        expect(actions.sendDataToSrv(msgType, msgText)).toEqual(sendAction);
    });

    it("Set message type", () => {
        const msgType = "something";
        const setMsgTypeAction = {
            type: types.SET_MSG_TYPE,
            msgType
        }
        expect(actions.setMsgType(msgType)).toEqual(setMsgTypeAction);
    });

    it("Set message text", () => {
        const msgText = "something";
        const setMsgTextAction = {
            type: types.SET_MSG_TEXT,
            msgText
        }
        expect(actions.setMsgText(msgText)).toEqual(setMsgTextAction);
    });

    it("Set error to null", () => {
        expect(actions.setErrorNull()).toEqual({type: types.SET_ERROR_TO_NULL});
    });
});