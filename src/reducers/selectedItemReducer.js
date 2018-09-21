import { ITEM_SELECTED } from '../actions/types';

const initalizeState = {
    selectedItem: 'itemOne',
}

export default (state = initalizeState, action) => {
    switch(action.type) {
        case ITEM_SELECTED:
            return {selectedItem : action.payload};
        default:
            return state;
    }
}