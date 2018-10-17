import * as types from '../../../actions/types';
import reducer from '../';

describe('articleReducer test', () => {
    it('it should change the articleText', () => {
        expect(reducer(undefined, {type: types.SET_ARTICLE_TEXT, articleText: "string", articleKateg: "string"})).toEqual(
            {
                articleText: "string",
                articleKateg: "-"
            }
        )
    });
    it('it should change the articleKateg', () => {
        expect(reducer(undefined, {type: types.SET_ARTICLE_KATEG, articleText: "string", articleKateg: "string"})).toEqual(
            {
                articleText: "-",
                articleKateg: "string"
            }
        )
    });
})