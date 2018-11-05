import { SET_ARTICLE_TEXT, SET_ARTICLE_KATEG, NEW_POEM } from '../../actions/types';
import { poemDataType } from '../dataReducer/'

export const setArticleText = (articleText: string) => {
    return {
        type: SET_ARTICLE_TEXT,
        articleText,
    };
}

export const setArticleKateg = (articleKateg: string) => {
    return {
        type: SET_ARTICLE_KATEG,
        articleKateg,
    };
}

export const newPoem = (selectedCategory: string, poemData: poemDataType[]) => {
    return {
        type: NEW_POEM,
        selectedCategory,
        poemData
    }
}