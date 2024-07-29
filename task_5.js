function longest(arr) {
    let l = arr.map(str => str.length);
    let m = l.reduce((max, len) => len > max ? len : max, 0);
    let res = arr.filter(str => str.length === m);
    return res[0];
}

let strs = ["hi", "hello", "helloworld", "helloworld!!"];
let longestStr = longest(strs);
console.log(longestStr); 
