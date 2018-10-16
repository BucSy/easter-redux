import { put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_LOCKER_DATA_SUCCESS } from '../actions/types';

export function* getLockerData() {  
  try {
      var lockerData = yield axios.get("https://api.backend.airspace.travel/prices");
      if (lockerData.status === 500 || lockerData.status > 200 && lockerData.status < 411) {
        alert("Error-status: " + lockerData.status);
        return false;
      } else {
        yield put({ type: GET_LOCKER_DATA_SUCCESS, payload: lockerData.data});
      }
    } catch(e) {
      alert(e);
    }
}