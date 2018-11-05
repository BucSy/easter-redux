import { takeEvery } from "redux-saga/effects";
import { SEND_DATA_REQUEST, GET_LOCKER_DATA, DEL_FAVDATA, FAVOURITE_DATA, NEW_POEM, POEM_DATA } from '../actions/types';
import { favouriteData, deleteFavouriteData } from './favouriteData';
import { sendDataToForm } from './sendDataToForm';
import { getLockerData } from './lockerData'
import { newPoem } from './newPoem';
import { poemData } from './poemData'

export default function* rootSaga() {
  yield takeEvery([FAVOURITE_DATA], favouriteData);
  yield takeEvery([SEND_DATA_REQUEST], sendDataToForm);
  yield takeEvery([DEL_FAVDATA], deleteFavouriteData);
  yield takeEvery([GET_LOCKER_DATA], getLockerData);
  yield takeEvery([NEW_POEM], newPoem);
  yield takeEvery([POEM_DATA], poemData);
};