import * as actions from '../actions';
import * as types from '../../../actions/types';
import { poemDataType } from '../';

describe("Data actions", () => {
    it("Get data action", () => {
        const poemData: poemDataType[] = [{ kateg: "something", vers: "something" }];
        const getDataAction = {
            type: types.GETDATA,
            poemData
        }
        expect(actions.getData(poemData)).toEqual(getDataAction);
    });

    it("Set poem data", () => {
        expect(actions.setPoemData()).toEqual({type: types.POEM_DATA});
    });

    it('Get favourite data', () => {
        const favouriteData: string[] = ['something'];
        const favouriteDataAction = {
            type: types.FAVDATA,
            favouriteData
        }
        expect(actions.getFavData(favouriteData)).toEqual(favouriteDataAction);
    });

    it("New favourite data", () => {
        const newFavouriteData = "something";
        const newFavouriteDataAction = {
            type: types.NEW_FAVDATA,
            newFavouriteData
        }
        expect(actions.newFavData(newFavouriteData)).toEqual(newFavouriteDataAction);
    });

    it("Delete favourite data", () => {
        const delFavouriteData: number = 1;
        const delFavouriteDataAction = {
            type: types.DEL_FAVDATA,
            delFavouriteData
        }
        expect(actions.deleteFavData(delFavouriteData)).toEqual(delFavouriteDataAction);
    });
});