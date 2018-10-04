import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import { SEND_DATA_REQUEST, SEND_DATA_SUCCESS, SEND_DATA_FAILURE } from '../actions/types';

function sendData(type, text) {
  axios.post('https://formcarry.com/s/GJQV7IePI18',
  {message: text, msgtype: type},
  {headers: {"Accept": "application/json"}},
);
}

function* sendDataToSrv (action) {
    try {
      const data = yield call(sendData, action.msgType, action.msg)
      yield put({ type: SEND_DATA_SUCCESS })
    } catch (e) {
      yield put({ type: SEND_DATA_FAILURE })
    }
  }
  
  function* dataSaga () {
    yield takeEvery(SEND_DATA_REQUEST, sendDataToSrv)
  }
  
  export default dataSaga;