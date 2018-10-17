import { getLockerData } from '../lockerData';

describe('Test for lockedData saga', () => {
    it('lockerData load', () => {
        const gen = getLockerData();
        expect(gen.next().value).not.toBe(false);
    })
})