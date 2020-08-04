var numbers = [];
var sum = 0;
for (var i = 1; i < 1000; i++) {
    if (i%3 === 0 || i%5 ===0) {
        numbers.push(i);
        sum = sum + i;
    }
}
console.log(numbers);
console.log(sum);
