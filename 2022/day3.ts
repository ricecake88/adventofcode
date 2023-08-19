import { readFileSync } from 'fs';


function calcPriority(char: string): number {
    const lowerPriority = 'abcdefghijklmnopqrstuvwxyz'.split("");
    const higherPriority = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    if (lowerPriority.includes(char)) {
         return lowerPriority.indexOf(char) + 1 
    }
    if (higherPriority.includes(char)) {
         return higherPriority.indexOf(char) + 27
    }
    return 0;
}

function compareTwoRucksacks(rucksack1: string[], rucksack2: string[]) {
    let val;
    for (let i = 0; i < rucksack1.length; i++) {
        if (rucksack2.includes(rucksack1[i])) {
            val = rucksack1[i];
            break;
        }
    }
    return val;
}

function onlyUniques(rucksack: string) {
    return rucksack.split("").reduce((clean: string[], currValue: string) => {
        if (!clean.includes(currValue)) {
            clean.push(currValue);
        }
        return clean;
    }, []);
}

export function splitIntoBuckets(unprocessed: string) {
    let index = unprocessed.length / 2;
    let rucksack = unprocessed.slice(0, index);
    const rucksack1 = onlyUniques(rucksack);
    rucksack = unprocessed.slice(index, unprocessed.length);
    const rucksack2 = onlyUniques(rucksack);
    return [
        rucksack1,
        rucksack2
    ]

}

export function main() {
    const lines = readFileSync('./tests/day3/day3-full-input.txt').toString().replace(/\r\n/g, " ").split(' ');
    let sum = 0;
    lines.forEach(line => {
        const [ bucket1, bucket2 ] = splitIntoBuckets(line);
        let commonItem = compareTwoRucksacks(bucket1, bucket2);
        sum += commonItem ? calcPriority(commonItem) : 0;
    })
    return sum;
}