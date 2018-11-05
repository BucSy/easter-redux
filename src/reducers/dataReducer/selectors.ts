import { createSelector } from 'reselect';

const sizeSelector = (state: any) => state.dataR.lockerData;

export const selectorBySize = createSelector(
    sizeSelector,
    lockers => [].concat(lockers).sort(dynamicSort("size"))
)

export const selectorByPrice = createSelector(
    [selectorBySize, sizeSelector],
    lockers => [].concat(lockers).sort(dynamicSort("price"))
)

function dynamicSort(property: string) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a: any,b: any) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}