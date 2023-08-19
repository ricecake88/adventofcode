import { splitIntoBuckets } from '../day3';

test(`splitIntoBuckets works`, () => {

    let str = 'abcdefHIpGpQRSTuvw';
    expect(splitIntoBuckets(str)).toEqual([['a', 'b', 'c', 'd', 'e', 'f', 'H', 'I', 'p'], ['G', 'p', 'Q', 'R', 'S', 'T', 'u', 'v', 'w']]);

})