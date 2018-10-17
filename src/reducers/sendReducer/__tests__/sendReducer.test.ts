import * as types from '../../../actions/types';
import reducer from '../';

describe("Send reducer test", () => {
    it("Send data request", () => {
        expect(reducer(undefined, 
            { type: types.SEND_DATA_REQUEST, msgType: "something", msgText: "somethign", payload: "error" }))
            .toEqual({
                loading: true,
                error: false,
                errorText: null,
                editable: false,
                msgText: "",
                msgType: "hiba"
            });
    });

    it("Send data success", () => {
        expect(reducer(undefined,
            {type: types.SEND_DATA_SUCCESS, msgType: "something", msgText: "something", payload: "error"}))
            .toEqual({
                loading: false,
                error: false,
                errorText: null,
                editable: true,
                msgText: "",
                msgType: "hiba"
            });
    });

    it("Send data failure", () => {
        expect(reducer(undefined,
            {type: types.SEND_DATA_FAILURE, msgType: "something", msgText: "something", payload: "error"}))
            .toEqual({
                loading: false,
                error: true,
                errorText: "error",
                editable: true,
                msgText: "",
                msgType: "hiba"
            });
    });

    it("Set message type", () => {
        expect(reducer(undefined,
            {type: types.SET_MSG_TYPE, msgType: "something", msgText: "something", payload: "error"}))
            .toEqual({
                loading: false,
                error: false,
                errorText: null,
                editable: true,
                msgText: "",
                msgType: "something"
            });
    });

    it("Set message text", () => {
        expect(reducer(undefined,
            {type: types.SET_MSG_TEXT, msgType: "something", msgText: "something", payload: "error"}))
            .toEqual({
                loading: false,
                error: false,
                errorText: null,
                editable: true,
                msgText: "something",
                msgType: "hiba"
            });
    });

    it("Set error to null", () => {
        expect(reducer(undefined,
            {type: types.SET_ERROR_TO_NULL, msgType: "something", msgText: "something", payload: "error"}))
            .toEqual({
                loading: false,
                error: false,
                errorText: null,
                editable: true,
                msgText: "",
                msgType: "hiba"
            });
    });
});