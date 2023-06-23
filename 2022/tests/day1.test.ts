import * as day1 from '../day1';

test('Most number of calories carried should be 24000', () => {
    let calories: Array<number> = [];
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
    let calorieList = day1.transformDataToCalorieList(input);
    expect(day1.elfMostCalories(calorieList)).toBe(24000);
})

test('Top 3 Carries 45000 calories', () => {
    let calories: Array<number>= [];
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
    let calorieList = day1.transformDataToCalorieList(input);
    expect(day1.getTopThreeSum(calorieList)).toBe(41000);
})
