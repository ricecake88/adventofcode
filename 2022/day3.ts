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

/* returns an array of unique values*/
function compareTwoRucksacks(rucksack1: string[], rucksack2: string[]) {
    let val = [];
    for (let i = 0; i < rucksack1.length; i++) {
        if (rucksack2.includes(rucksack1[i])) {
            val.push(rucksack1[i]);
            
        }
    }
    return val;
}

/* return only the unique values of the rucksacks */
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

export function partOne(lines: []) {
    let sum = 0;
    lines.forEach(line => {
        const [ bucket1, bucket2 ] = splitIntoBuckets(line);
        let commonItem = compareTwoRucksacks(bucket1, bucket2);
        sum += commonItem[0] ? calcPriority(commonItem[0]) : 0;
    })
    return sum;
}


/* calculate the sum based on common items grouped by numOfLines
* parameters:
*   lines - array of lines processed from input
*   numOfLines = number of lines to group together to find the common item between
*                the rucksacks
*/
export function partTwo(lines: [], numOfLines: number) {
    let sum = 0;
    const groupedLines = [];

    for (let i = 0; i < lines.length; i++) {
        groupedLines.length = 0;

        // get all the lines to find same item
        for (let j = 0; j < numOfLines; j++) {
            groupedLines.push(onlyUniques(lines[i+j]));
        }

        // compare the lines repeatedly to find the common item
        let commonItems = groupedLines[0];
        for (let lineNum = 1; lineNum < numOfLines-1; lineNum++) {
           commonItems = compareTwoRucksacks(commonItems, groupedLines[lineNum]);

           // if nothing is found, break
           if (commonItems.length === 0) {
            break;
           }
        }

        // calculate the priority of each commonly found item
        sum += calcPriority(commonItems[0]);

        // set counter as offset from number of lines to compare
        i += numOfLines-1;
    }
    return sum;
}

export function main() {
    let result = 0;
    // part one calculations
    // const lines = readFileSync('./tests/day3/day3-full-input.txt').toString().replace(/\r\n/g, " ").split(' ');
    // result = partOne(lines as []);
    const part2lines = readFileSync('./tests/day3/day3-full-input.txt').toString().replace(/\r\n/g, " ").split(' ');
    result = partTwo(part2lines as [], 3);
    return result;
}