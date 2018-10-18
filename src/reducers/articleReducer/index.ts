import { 
    SET_ARTICLE_TEXT,
    SET_ARTICLE_KATEG
 } from '../../actions/types';
import Immutable from 'seamless-immutable';

export interface articleState {
    articleText: string
    articleKateg: string
}

var initalizeState = Immutable({
    articleText: '-',
    articleKateg: '-'
});

export default (state = initalizeState, action: {type: string, articleText: string, articleKateg: string}) => {
    switch(action.type) {
        case SET_ARTICLE_TEXT:
            return state.merge({ articleText: action.articleText })
        case SET_ARTICLE_KATEG:
            return state.merge({ articleKateg: action.articleKateg })
        default:
            return state
    }
}