import * as types from '../../../actions/types';
import reducer from '../';

describe('Selected Items Reducer Test', () => {
    it('set item reducer', () => {
        expect(reducer(undefined, {type: types.ITEM_SELECTED, selectedItem: 'string'}))
            .toEqual({ 
                selectedItem: "string",
                showByPrice: false,
                showBySize: false
            });
    });
    
    it('Short items by price reducer', () => {
        expect(reducer(undefined, {type: types.SHOW_SORT_BY_PRICE, selectedItem: 'string'}))
            .toEqual({
                selectedItem: 'itemOne',
                showByPrice: true,
                showBySize: false
            });
    });

    it('Short items by size reducer', () => {
        expect(reducer(undefined, {type: types.SHOW_SORT_BY_SIZE, selectedItem: 'string'}))
            .toEqual({
                selectedItem: 'itemOne',
                showByPrice: false,
                showBySize: true
            });
    });
});