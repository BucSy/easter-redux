import { ITEM_SELECTED } from '../actions/types';
import Immutable, { isImmutable } from 'seamless-immutable';
import { setSelectedItem } from '../actions/index';

export interface selectedItemState {
    readonly selectedItem: string;
}

const initalizeState: selectedItemState = Immutable({
    selectedItem: 'itemOne',
});

export default (state = initalizeState, action: {type: string, payload: string}) => {
    switch(action.type) {
        case ITEM_SELECTED:
            return {...state, selectedItem : action.payload};
        default:
            return state;
    }
}