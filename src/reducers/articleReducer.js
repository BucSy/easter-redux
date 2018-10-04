import { 
    SET_ARTICLE_TEXT,
    SET_ARTICLE_KATEG
 } from '../actions/types';

const initalizeState = {
    articleText: '-',
    articleKateg: '-'
}

export default (state = initalizeState, action) => {
    switch(action.type) {
        case SET_ARTICLE_TEXT:
            return {...state, articleText: action.payload}
        case SET_ARTICLE_KATEG:
            return {...state, articleKateg: action.payload}
        default:
            return state
    }
}