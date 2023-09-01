import { partTwo, splitIntoBuckets } from '../day3';

test(`splitIntoBuckets works`, () => {

    let str = 'abcdefHIpGpQRSTuvw';
    expect(splitIntoBuckets(str)).toEqual([['a', 'b', 'c', 'd', 'e', 'f', 'H', 'I', 'p'], ['G', 'p', 'Q', 'R', 'S', 'T', 'u', 'v', 'w']]);

})

test('partOne outcome', () => {
    const lines = [
        'vJrwpWtwJgWrhcsFMMfFFhFp',
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
        'PmmdzqPrVvPwwTWBwg',
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
        'ttgJtRGJQctTZtZT',
        'CrZsJsPPZsGzwwsLwLmpwMDws'        
    ];
    expect(partTwo(lines as [], 3)).toEqual(70);
})