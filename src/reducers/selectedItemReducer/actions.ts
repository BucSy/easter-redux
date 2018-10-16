import { ITEM_SELECTED, SHOW_SORT_BY_PRICE, SHOW_SORT_BY_SIZE } from '../../actions/types';

export const setSelectedItem = (selectedItem: string) => {
    return {
        type: ITEM_SELECTED,
        selectedItem
    };
}

export const showSortByPrice = () => {
    return {
        type: SHOW_SORT_BY_PRICE
    }
}

export const showSortBySize = () => {
    return {
        type: SHOW_SORT_BY_SIZE
    }
}