import { put } from 'redux-saga/effects';
import { SET_ARTICLE_KATEG, SET_ARTICLE_TEXT } from '../actions/types';

export function* newPoem(action: { type: string, selectedCategory: string, poemData: { kateg: string; vers: string; }[]}) {
    switch(action.selectedCategory) {
        case 'itemOne':
         let szam = Math.floor(Math.random() * (36 - 0 + 1)) + 0;
         yield put ({type: SET_ARTICLE_KATEG, articleKateg: action.poemData[szam].kateg});
         yield put ({type: SET_ARTICLE_TEXT, articleText: action.poemData[szam].vers});
         break;
        case 'itemTwo':
         szam = Math.floor(Math.random() * (18 - 0 + 1)) + 0;
         yield put ({type: SET_ARTICLE_KATEG, articleKateg: action.poemData[szam].kateg});
         yield put ({type: SET_ARTICLE_TEXT, articleText: action.poemData[szam].vers});
         break;
        case 'itemThree':
         szam = Math.floor(Math.random() * (27 - 19 + 1)) + 19;
         yield put ({type: SET_ARTICLE_KATEG, articleKateg: action.poemData[szam].kateg});
         yield put ({type: SET_ARTICLE_TEXT, articleText: action.poemData[szam].vers});
         break;
        case 'itemFour':
         szam = Math.floor(Math.random() * (36 - 28 + 1)) + 28;
         yield put ({type: SET_ARTICLE_KATEG, articleKateg: action.poemData[szam].kateg});
         yield put ({type: SET_ARTICLE_TEXT, articleText: action.poemData[szam].vers});
         break;
        default:
         szam = Math.floor(Math.random() * (36 - 0 + 1)) + 0;
         yield put ({type: SET_ARTICLE_KATEG, articleKateg: action.poemData[szam].kateg});
         yield put ({type: SET_ARTICLE_TEXT, articleText: action.poemData[szam].vers});
         break;
      }
}