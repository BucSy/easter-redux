import { expectSaga } from 'redux-saga-test-plan';
import rootSaga from '..'
import * as types from '../../actions/types'
import * as testHelper from '../testhelper';
import * as matchers from 'redux-saga-test-plan/matchers'


const AsyncStorageitems: any = JSON.stringify({"key": "something"});

    jest.mock('react-native', () => ({
        AsyncStorage: {
            getItem: jest.fn(((item, value) => {
                return new Promise((resolve, reject) => {
                    resolve(AsyncStorageitems);
                })
            })
        )}
    }));

describe('Saga tests', () => {
    expectSaga.DEFAULT_TIMEOUT = 8000;

    it('lockerData load', () => {
        expectSaga(rootSaga)
            .put({type: types.GET_LOCKER_DATA_SUCCESS, payload: testHelper.lockerData})
            .dispatch({type: types.GET_LOCKER_DATA})
            .run(false);
    }, 100000);

    const { AsyncStorage } = require('react-native');

    beforeEach(() => {
        AsyncStorage.getItem.mockClear();
    })

    it('Favourite data saga', () => {
        return expectSaga(rootSaga)
            .dispatch({type: types.FAVOURITE_DATA})
            .provide([
                matchers.call.fn(AsyncStorage.getItem("key"))
            ])
            .put({type: types.FAVDATA, favouriteData: {key : "something"}})
            .run(2000);
    });

    it('Poem data load', () => {
            expectSaga(rootSaga)
                .put({type: types.GETDATA, poemData: testHelper.poemData})
                .dispatch({type: types.POEM_DATA})
                .run(false);
    }, 100000);

    it('Send data to form', () => {
            return expectSaga(rootSaga)
                .put({type: types.SEND_DATA_FAILURE})
                .dispatch({type: types.SEND_DATA_REQUEST, msgType: "hiba", msgText: "asd"})
                .run();
    }, 10000);
});