'use strict';

import { randomIntFromInterval } from './utility';

describe('Test Methods from Utility.js', () => {

    it('Should do something but maybe not', () => {
        let number = randomIntFromInterval( 1, 9 );

        expect(number).toBeGreaterThan(1);
        expect(number).toBeLessThan(9);
    });
});
