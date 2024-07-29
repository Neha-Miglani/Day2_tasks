function Arrayofcubes(arr) {
    return arr.map(num => num ** 3);
}
  
let numbers = [1, 2, 3, 4];
let cubes = Arrayofcubes(numbers);
console.log(cubes); 
  