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

const outcomeMap = {
    X: 'lose',
    Y: 'draw',
    Z: 'win'
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
type outcomes = keyof typeof outcomeMap;
type choices = 'rock' | 'paper' | 'scissors'
type test = typeof roundPoints

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

function calculateMyHand(inputA: choices, outcome: string) {
    if (outcome === 'draw') {
        return inputA;
    }
    if (outcome === 'lose') {
        return winCombos[inputA] as choices
    }
    if (outcome === 'win') {
        const myPlay = Object.entries(winCombos).filter((x) => {
            if (inputA === x[1]) {
                return x[0];
            }
        }, '')[0][0];
        return myPlay as choices;
    }

}

export function main() {
    const data = f.readFileSync('./tests/day2/day2-full-input.txt');
    let sum = 0;
    const lines = data.toString().split("\n");
    const test = lines.map(x => {
        x = x.replace(/[\n\r]/g, '');
        const inputs = x.split(" ");
        let hand = calculateMyHand(oppPlayMap[inputs[0] as oppInput] as choices, outcomeMap[inputs[1] as outcomes] as choices)
        const shapePoints = calculateShapePoints(hand as choices);
        let points = calculateMyPoints(oppPlayMap[inputs[0] as oppInput] as choices, hand as choices);
        sum += points + shapePoints;
    });
    return sum;

}
