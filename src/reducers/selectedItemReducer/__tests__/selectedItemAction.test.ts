import * as actions from '../actions';
import * as types from '../../../actions/types';

describe('SelectedItem action Test', () =>{
    it("Set selected item", () => {
        const selectedItemName: string = "itemOne";
        const selectedItemAction = {
            type: types.ITEM_SELECTED,
            selectedItem: selectedItemName
        }
        expect(actions.setSelectedItem(selectedItemName)).toEqual(selectedItemAction);
    });

    it("Short items by price action", () => {
        const shortItemsByPriceAction = {
            type: types.SHOW_SORT_BY_PRICE
        }
        expect(actions.showSortByPrice()).toEqual(shortItemsByPriceAction);
    });

    it("Short items by size action", () => {
        const shortItemsBySizeAction = {
            type: types.SHOW_SORT_BY_SIZE
        }
        expect(actions.showSortBySize()).toEqual(shortItemsBySizeAction);
    });
})