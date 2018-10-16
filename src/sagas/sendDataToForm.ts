import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { SEND_DATA_FAILURE, SEND_DATA_SUCCESS } from '../actions/types';
 
function* sendData(type: string, text: string) {
  let apiRes;
  try {
    apiRes = yield axios.post('https://formcarry.com/s/GJQV7IePI18',
      {message: text, msgtype: type},
      {headers: {"Accept": "application/json"}},
    );
    if (apiRes.status === 500 || apiRes.status > 200 && apiRes.status < 411) {
      alert("Error-status: " + apiRes.status);
      return false;
    }
  } catch(e) {
    if (e.response && e.response.status === 500) {
      alert("Error-status: " + e.response.status);
      return false;
    } else {
      alert("Error-status: " + e.response.status);
      return false;
    }
  }
  return apiRes;
}
  
export function* sendDataToForm (action: any) {
    if (action.msgType === null) {
      yield put({ type: SEND_DATA_FAILURE, payload: "Kérlek adj meg üzenet típust!"});
    } else if (action.msg === null) {
      yield put({ type: SEND_DATA_FAILURE, payload: "Kérlek ne hagyd üresen az üzenet mezőt!"});
    } else {
      try {
        yield call(sendData, action.msgType, action.msg);
        yield put({ type: SEND_DATA_SUCCESS })
      } catch (e) {
        yield put({ type: SEND_DATA_FAILURE })
      }
    }
}