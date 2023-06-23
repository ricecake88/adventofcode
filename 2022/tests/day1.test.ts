import * as day1 from '../day1';

test('adds 1 + 2 to equal 3', () => {
    expect(day1.sum(1, 2)).toBe(3);
})

test('Elf 1 should return most calories', () => {
    let calories: number[] = [];
    const input = [
        '1000',
        '2000',
        '3000',
        '',
        '4000',
        '',
        '5000',
        '6000',
        '',
        '7000',
        '8000',
        '9000',
        '',
        '10000',      
    ];

    expect(day1.elfMostCalories(input, calories)).toBe(24000);
})
