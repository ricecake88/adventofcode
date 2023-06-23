/*
 * Day 1 of Advent Code 2022
 * Exercise located:
 * https://adventofcode.com/2022/day/1 
 */
import { readFileSync } from 'fs';


// -- part two --
export function findElf(calorieAmount: number, calories: Array<number>): number {
    return calories.indexOf(calorieAmount) + 1;
}

export function getTopThreeSum(calories: Array<number>) {
    let sortedCalories = calories;
    sortedCalories.sort(function(a,b) {return b - a});
    return sortedCalories[0] + sortedCalories[1] + sortedCalories[2];
}


// -- part one
export function transformDataToCalorieList(data: Array<string>): Array<number> {
    const calories: Array<number> = [];    
    let totalCalories = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i]) {
            totalCalories += parseInt(data[i]);
        } else {
            calories.push(totalCalories);
            totalCalories = 0;
        }
    };
   return calories;
}

export function elfMostCalories(calories: Array<number>): number {
    return Math.max(...calories);
 }

 
export function main(): void {

    const data = readFileSync('./tests/day1/day1-input.txt').toString().replace(/\r\n/g, " ").split('\n');
    const calorieList = transformDataToCalorieList(data);
    console.log(`Calories carried the most: ${calorieList}`);
    const topThreeSum = getTopThreeSum(calorieList);
    console.log(`Total calories of top three: ${topThreeSum}`);


}
