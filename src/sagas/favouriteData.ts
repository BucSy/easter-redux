import { put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { FAVDATA } from '../actions/types';

export function* favouriteData() {
    var items = yield AsyncStorage.getItem('key')
    .then((favourites) => favourites === null ? console.log("Items is null") : JSON.parse(favourites));
    if (items === null) { 
        console.log("items is null")
    } else {
        yield put({ type: FAVDATA, favouriteData: items});
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