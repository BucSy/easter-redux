import { put } from 'redux-saga/effects';
import axios from 'axios';
import { GETDATA } from '../actions/types';

export function* poemData() {
    let apiResponse;
    try {
        apiResponse = yield axios.get('https://raw.githubusercontent.com/BucSy/pygame_/master/husvet.json');
            yield put({ type: GETDATA, poemData: apiResponse.data});
    } catch(e) {
        alert("Error statuscode: " + e.response.status);
    }
}