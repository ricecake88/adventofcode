"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.elfMostCalories = void 0;
/*
 * Day 1 of Advent Code 2022
 * Exercise located:
 * https://adventofcode.com/2022/day/1
 */
const fs_1 = require("fs");
function elfMostCalories(data) {
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
    return Math.max(...calories);
}
exports.elfMostCalories = elfMostCalories;
function main() {
    const data = (0, fs_1.readFileSync)('./tests/day1/day1-input.txt').toString().replace(/\r\n/g, " ").split('\n');
    console.log(`Elf #: ${elfMostCalories(data)} carries the most calories`);
}
/* test function for jest */
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
main();
