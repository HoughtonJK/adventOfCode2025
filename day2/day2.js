const fs = require('fs');
/*/
const data = fs.readFileSync('./day2data.txt', 'utf8').split(',');
/*/
const data = fs.readFileSync('./sample2.txt', 'utf8').split(',');
/**/

// PART 1 Solution
//////////////////////////////
let sum = 0;
for(range of data) {
    let [low, high] = range.split('-');
    let start = 0;
    if (low.length % 2 === 0) {
        start = low.slice(0, low.length / 2);
    } else {
        start = 10 ** ((low.length - 1)/ 2)

    }
    for(let i = +(start); i <= high.slice(0, high.length - ("" + start).length); i++) {
        if(+("" + i + i) <= +high && +("" + i + i) >= +low) {
            sum += +("" + i + i);
        }
    }

}
console.log('Total', sum)

// PART 2 Solution
///////////////////////////////////////
let sum2 = 0


console.log('Total 2', sum2);