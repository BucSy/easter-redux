import { ITEM_SELECTED, SHOW_SORT_BY_PRICE, SHOW_SORT_BY_SIZE } from '../actions/types';
import Immutable from 'seamless-immutable';

export interface selectedItemState {
    readonly selectedItem: string;
    readonly showByPrice: boolean;
    readonly showBySize: boolean;
}

const initalizeState: selectedItemState = Immutable({
    selectedItem: 'itemOne',
    showBySize: false,
    showByPrice: false
});

export default (state = initalizeState, action: {type: string, payload: string}) => {
    switch(action.type) {
        case ITEM_SELECTED:
            return {...state, selectedItem : action.payload};
        case SHOW_SORT_BY_PRICE:
            return {...state, showByPrice : true, showBySize: false};
        case SHOW_SORT_BY_SIZE:
            return {...state, showByPrice : false, showBySize: true};
        default:
            return state;
    }
}