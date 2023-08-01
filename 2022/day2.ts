/*
 * Day 2 of Advent Code 2022
 * Exercise located:
 * https://adventofcode.com/2022/day/2
 */

import { readFileSync } from 'fs';
import * as f from 'fs';
import * as rl from 'readline';

const winCombos = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
}

const oppPlayMap = {
    A: 'rock',
    B: 'paper',
    C: 'scissors'
}

const myPlayMap = {
    X: 'rock',
    Y: 'paper',
    Z: 'scissors'
}

enum roundPoints {
    lose = 0,
    draw = 3,
    win = 6
 }

 const shapePoints = {
    'rock': 1,
    'paper': 2,
    'scissors': 3
 }

type oppInput = keyof typeof oppPlayMap;
type myInput = keyof typeof myPlayMap;
type choices = 'rock' | 'paper' | 'scissors'

function calculateShapePoints(inputB: choices) {
    return shapePoints[inputB];
}

function calculateMyPoints(inputA: choices, inputB: choices) {
    if (inputA === inputB) {
        return roundPoints.draw;
    }
    // if wincombos[inputA] equaes inputB, it means inputB won
    if (winCombos[inputB as choices] === inputA) {
        return roundPoints.win;
    } else {
        return roundPoints.lose;
    }
}


export function main() {
    //const data = readFileSync('./tests/day2/day2-input.txt').toString().split(" ");
    
    let r = rl.createInterface({
        input: f.createReadStream('./tests/day2/day2-full-input.txt')
    });
    let sum = 0;
    r.on('line', (t) => {
        const inputs = t.split(" ");
        //console.log(inputs);
        let points = calculateMyPoints(oppPlayMap[inputs[0] as oppInput] as choices, myPlayMap[inputs[1] as myInput] as choices);
        //console.log(points);
        let shapePoints = calculateShapePoints(myPlayMap[inputs[1] as myInput] as choices);
        //console.log(shapePoints);
        sum += points + shapePoints;
        console.log(sum);
    });

}
