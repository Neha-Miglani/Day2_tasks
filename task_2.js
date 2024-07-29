let numbers = [1, 2, 3, 4, 5, 6];

let totsum = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);

console.log(totsum); 
