import { ITEM_SELECTED } from '../actions/types';
import Immutable, { isImmutable } from 'seamless-immutable';

const initalizeState = Immutable({
    selectedItem: 'itemOne',
});

export default (state = initalizeState, action) => {
    switch(action.type) {
        case ITEM_SELECTED:
            return {...state, selectedItem : action.payload};
        default:
            return state;
    }
}