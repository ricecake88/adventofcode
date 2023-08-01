"use strict";
/*
 * Day 2 of Advent Code 2022
 * Exercise located:
 * https://adventofcode.com/2022/day/2
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const fs_1 = require("fs");
function main() {
    const data = (0, fs_1.readFileSync)('./tests/day2/day2-input.txt');
    console.log(data);
}
exports.main = main;
