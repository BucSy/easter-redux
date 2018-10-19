import { ITEM_SELECTED, SHOW_SORT_BY_PRICE, SHOW_SORT_BY_SIZE } from '../../actions/types';
import produce from 'immer';

export interface selectedItemState {
    readonly selectedItem: string;
    readonly showByPrice: boolean;
    readonly showBySize: boolean;
}

const initalizeState: selectedItemState = {
    selectedItem: 'itemOne',
    showBySize: false,
    showByPrice: false
};

export default (state = initalizeState, action: {type: string, selectedItem: string}) => 
    produce(state, draft => {
        switch(action.type) {
            case ITEM_SELECTED:
                draft.selectedItem = action.selectedItem;
                break;
            case SHOW_SORT_BY_PRICE:
                draft.showByPrice = true;
                draft.showBySize = false;
                break;
            case SHOW_SORT_BY_SIZE:
                draft.showByPrice = false;
                draft.showBySize = true;
                break;
            default:
                return state;
        }
})
