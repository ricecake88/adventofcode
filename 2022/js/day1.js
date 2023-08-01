"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.elfMostCalories = exports.transformDataToCalorieList = exports.getTopThreeSum = exports.findElf = void 0;
/*
 * Day 1 of Advent Code 2022
 * Exercise located:
 * https://adventofcode.com/2022/day/1
 */
const fs_1 = require("fs");
// -- part two --
function findElf(calorieAmount, calories) {
    return calories.indexOf(calorieAmount) + 1;
}
exports.findElf = findElf;
function getTopThreeSum(calories) {
    let sortedCalories = calories;
    sortedCalories.sort(function (a, b) { return b - a; });
    return sortedCalories[0] + sortedCalories[1] + sortedCalories[2];
}
exports.getTopThreeSum = getTopThreeSum;
// -- part one
function transformDataToCalorieList(data) {
    const calories = [];
    let totalCalories = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i]) {
            totalCalories += parseInt(data[i]);
        }
        else {
            calories.push(totalCalories);
            totalCalories = 0;
        }
    }
    ;
    return calories;
}
exports.transformDataToCalorieList = transformDataToCalorieList;
function elfMostCalories(calories) {
    return Math.max(...calories);
}
exports.elfMostCalories = elfMostCalories;
function main() {
    const data = (0, fs_1.readFileSync)('./tests/day1/day1-input.txt').toString().replace(/\r\n/g, " ").split('\n');
    const calorieList = transformDataToCalorieList(data);
    console.log(`Calories carried the most: ${calorieList}`);
    const topThreeSum = getTopThreeSum(calorieList);
    console.log(`Total calories of top three: ${topThreeSum}`);
}
exports.main = main;
