import { put, call } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { FAVDATA, FAVOURITE_DATA_NULL } from '../actions/types';

export function* favouriteData() {
        var items = yield call(AsyncStorage.getItem, 'key');
        if(items !== null || items !== undefined) {
            yield put({ type: FAVDATA, favouriteData: JSON.parse(items)});
        } else {
            yield put({ type: FAVOURITE_DATA_NULL })
        }
}

export function* deleteFavouriteData(action: { type: string, payload: number }) {
        yield AsyncStorage
                .getItem('key')
                .then((favs: any) => {
                    favs = favs === null ? [] : JSON.parse(favs)
                    favs.splice(action.payload, 1);
                    AsyncStorage.setItem('key', JSON.stringify(favs))
                });
}