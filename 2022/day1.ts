/*
 * Day 1 of Advent Code 2022
 * Exercise located:
 * https://adventofcode.com/2022/day/1 
 */
import { readFileSync } from 'fs';

export function elfMostCalories(data: Array<string>, calories: Array<number>): number {

    let totalCalories = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i]) {
            totalCalories += parseInt(data[i]);
        } else {
            calories.push(totalCalories);
            totalCalories = 0;
        }
    };
   return Math.max(...calories);
}

// -- part two --
export function findElf(calorieAmount: number, calories: Array<number>): number {
    return calories.indexOf(calorieAmount) + 1;
}

export function getTopThree(calories: Array<number>) {
    let sortedCalories = calories;
    sortedCalories.sort((a,b) => {return b-a});
    return sortedCalories[0] + sortedCalories[1] + sortedCalories[2];
}

function main(): void {
    const calories: Array<number> = [];
    const data = readFileSync('./tests/day1/day1-input.txt').toString().replace(/\r\n/g, " ").split('\n');
    console.log(`Calories carried the most: ${elfMostCalories(data, calories)}`);
    console.log(`Total calories of top three: ${getTopThree(calories)}`);


}

/* test function for jest */
export function sum(a: number, b: number): number {
    return a+b;
}

main();
