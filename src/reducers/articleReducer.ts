import { 
    SET_ARTICLE_TEXT,
    SET_ARTICLE_KATEG
 } from '../actions/types';
import Immutable from 'seamless-immutable';

export interface articleState {
    readonly articleText: string
    readonly articleKateg: string
}

const initalizeState: articleState = Immutable({
    articleText: '-',
    articleKateg: '-'
});

export default (state = initalizeState, action: {type: string, articleText: string, articleKateg: string}) => {
    switch(action.type) {
        case SET_ARTICLE_TEXT:
            return {...state, articleText: action.articleText}
        case SET_ARTICLE_KATEG:
            return {...state, articleKateg: action.articleKateg}
        default:
            return state
    }
}