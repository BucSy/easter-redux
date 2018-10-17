import { put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { FAVDATA } from '../actions/types';

export function* favouriteData() {
    try {
        var items = yield AsyncStorage.getItem('key')
        .then((favourites) => favourites === null || favourites === undefined ? console.log("Items is null") : JSON.parse(favourites));
    } catch(e) {
        alert(e);
    }
    if (items === null || items === undefined) { 
        console.log("items is null")
    } else {
        yield put({ type: FAVDATA, favouriteData: items});
    }
}

export function* deleteFavouriteData(action: { type: string, payload: number }) {
    try {
        yield AsyncStorage
                .getItem('key')
                .then((favs: any) => {
                    favs = favs === null ? [] : JSON.parse(favs)
                    favs.splice(action.payload, 1);
                    AsyncStorage.setItem('key', JSON.stringify(favs))
                });
        } catch(e) {
            alert(e);
        } 
}