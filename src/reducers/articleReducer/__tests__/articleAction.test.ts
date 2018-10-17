import * as actions from '../actions';
import * as types from '../../../actions/types';
import { poemDataType } from '../../dataReducer/index';

describe('articleReducer Action Tests', () => {
    it('An action to add articleKateg', () => {
        const articleKateg: string = "Humor";
        const articleKategAction = {
            type: types.SET_ARTICLE_KATEG,
            articleKateg
        }
        expect(actions.setArticleKateg(articleKateg)).toEqual(articleKategAction);
    });
    it('An action to add articleText', () => {
        const articleText: string = "something";
        const articleTextAction = {
            type: types.SET_ARTICLE_TEXT,
            articleText
        }
        expect(actions.setArticleText(articleText)).toEqual(articleTextAction);
    });
    it('An action to add SelectedCategory and poemData', () => {
        const poemData: poemDataType[] = [{"kateg" : "this", "vers": "that"}];
        const selectedCategory = "aaa";
        const newPoemAction = {
            type: types.NEW_POEM,
            selectedCategory,
            poemData
        };
        expect(actions.newPoem(selectedCategory, poemData)).toEqual(newPoemAction);
    })
})