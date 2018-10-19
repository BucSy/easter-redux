import { 
    SET_ARTICLE_TEXT,
    SET_ARTICLE_KATEG
 } from '../../actions/types';
import produce from 'immer';

export interface articleState {
    articleText: string
    articleKateg: string
}

const initalizeState: articleState = {
    articleText: '-',
    articleKateg: '-'
};

export default (state = initalizeState, action: {type: string, articleText: string, articleKateg: string}) => 
    produce(state, draft => {
        switch(action.type) {
            case SET_ARTICLE_TEXT:
                draft.articleText = action.articleText;
                break;
            case SET_ARTICLE_KATEG:
                draft.articleKateg = action.articleKateg;
                break;
            default:
                return state
        }
    })