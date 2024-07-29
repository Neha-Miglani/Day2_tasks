function average(numbers) {
    let odds = numbers.filter(function(num) {
        return num % 2 !== 0;
    });

    let square_of_Odds = odds.map(function(num) {
        return num * num;
    });

    let totsum = square_of_Odds.reduce(function(sum, num) {
        return sum + num;
    }, 0);

    let average = totsum / square_of_Odds.length;

    return average;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let ans_average = average(numbers);
console.log(ans_average); 
