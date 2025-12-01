const fs = require('fs');
let data = fs.readFileSync('./day1a.txt', 'utf8').split('\n');
//data = fs.readFileSync('./sample.txt', 'utf8').split('\n');
let position = 50;

count = 0;
/*/
for(i in data) {
    let [a, b] = [data[i].slice(0,1), data[i].slice(1)];
    position = (a ==='R' ? position + +b : position + -b) % 100;
    if (position === 0) count ++;
}
/*/
for(i in data) {
    let [a, b] = [data[i].slice(0,1), data[i].slice(1)];
    if(+b > 99) {
        count += (+b - (b % 100))/100;
        b = +b % 100;
    }
    if(a === 'R') {
        if(position + +b > 99) count++;
        position = (position + +b) % 100
    } else {
        if(position + -b <= 0) {
            if(position != 0) count++;
            position += 100;
        }
        position = (position + -b) % 100
    }
    console.log(i, count, position)
}
/**/
// 024579

console.log(count);