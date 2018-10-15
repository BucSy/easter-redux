import { takeEvery, put, call, all } from "redux-saga/effects";
import axios from "axios";
import { SEND_DATA_REQUEST, GET_LOCKER_DATA, SEND_DATA_SUCCESS, SEND_DATA_FAILURE, FAVDATA, DEL_FAVDATA } from '../actions/types';
import { AsyncStorage } from 'react-native';

function sendData(type: string, text: string) {
  axios.post('https://formcarry.com/s/GJQV7IePI18',
  {message: text, msgtype: type},
  {headers: {"Accept": "application/json"}},
  );
}

function* sendDataToSrv (action: any) {
  if (action.msgType === null) {
    yield put({ type: SEND_DATA_FAILURE, payload: "Kérlek adj meg üzenet típust!"});
  } else if (action.msg === null) {
    yield put({ type: SEND_DATA_FAILURE, payload: "Kérlek ne hagyd üresen az üzenet mezőt!"});
  } else {
    try {
      const data = yield call(sendData, action.msgType, action.msg)
      yield put({ type: SEND_DATA_SUCCESS })
    } catch (e) {
      yield put({ type: SEND_DATA_FAILURE })
    }
  }
}
  
function* dataSaga () {
  yield takeEvery(SEND_DATA_REQUEST, sendDataToSrv)
}

function* getFavouriteDataAtStart() {
  var items = yield AsyncStorage.getItem('key').then(JSON.parse);
  yield put({ type: FAVDATA, favouriteData: items})
}

function* deleteData(action: any) {
  yield AsyncStorage
          .getItem('key')
          .then((favs: any) => {
              favs = favs === null ? [] : JSON.parse(favs)
              favs.splice(action.payload, 1);
              AsyncStorage.setItem('key', JSON.stringify(favs))
          });
}

function* getLockerDataAtStart() {
  const _lockerData = yield axios.get("https://api.backend.airspace.travel/prices");
  yield put({ type: GET_LOCKER_DATA, payload: _lockerData.data});
}

function* deleteFavItemFromList() {
  yield takeEvery(DEL_FAVDATA, deleteData)
}
  
export default function* rootSaga() {
  yield all([
    dataSaga(),
    getFavouriteDataAtStart(),
    deleteFavItemFromList(),
    getLockerDataAtStart(),
  ]) 
};