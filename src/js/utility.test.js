'use strict';

import { randomIntFromInterval, randomColor } from './utility';

describe('Test Methods from Utility.js', () => {

    it('Should return a number between 1 and 9', () => {
        let number = randomIntFromInterval( 1, 9 );

        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(9);
    });

    it('Should return a random rgba color', () => {
        let color = randomColor();

        expect(color).toContain('rgba(');
    });
});
