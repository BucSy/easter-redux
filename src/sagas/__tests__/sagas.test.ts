import { expectSaga } from 'redux-saga-test-plan';
import rootSaga from '..'
import * as types from '../../actions/types'
import * as testHelper from '../testhelper';
//import { favouriteData } from '../favouriteData';

describe('Saga tests', () => {
    expectSaga.DEFAULT_TIMEOUT = 8000;
    it('lockerData load', () => {
        expectSaga(rootSaga)
            .put({type: types.GET_LOCKER_DATA_SUCCESS, payload: testHelper.lockerData})
            .dispatch({type: types.GET_LOCKER_DATA})
            .run();
    });

    // it('Favourite data saga', () => {
    //     expectSaga(rootSaga)
    //         .dispatch({type: types.FAVOURITE_DATA})
    //         .call(favouriteData)
    //         .run();
    // });

    it('Poem data load', () => {
            expectSaga(rootSaga)
                .put({type: types.GETDATA, poemData: testHelper.poemData})
                .dispatch({type: types.POEM_DATA})
                .run();
    });

    it('Send data to form', () => {
            expectSaga(rootSaga)
                .put({type: types.SEND_DATA_SUCCESS})
                .dispatch({type: types.SEND_DATA_REQUEST, msgType: "hiba", msgText: "asd"})
                .run();
    });
});