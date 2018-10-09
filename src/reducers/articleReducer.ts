import { 
    SET_ARTICLE_TEXT,
    SET_ARTICLE_KATEG
 } from '../actions/types';
import Immutable, { isImmutable } from 'seamless-immutable';

export interface articleState {
    readonly articleText: string
    readonly articleKateg: string
}

const initalizeState: articleState = Immutable({
    articleText: '-',
    articleKateg: '-'
});

export default (state = initalizeState, action: {type: string, payload: string}) => {
    switch(action.type) {
        case SET_ARTICLE_TEXT:
            return {...state, articleText: action.payload}
        case SET_ARTICLE_KATEG:
            return {...state, articleKateg: action.payload}
        default:
            return state
    }
}