import { put, call } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { FAVDATA, FAVOURITE_DATA_NULL } from '../actions/types';

export function* favouriteAsyncStorage() {
    try {
        let favourites = yield call(AsyncStorage.getItem, 'key');
        let fav = JSON.parse(favourites);
        return fav;
    } catch(e) {
        console.log(e);
    }
}

export function* favouriteData() {
        let items = yield call(favouriteAsyncStorage);
        if(items !== null || items !== undefined) {
            yield put({ type: FAVDATA, favouriteData: items});
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