function capitalizeWords(sentence) {
    return sentence.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

let statement = "Hello! Introducing javascript to you!";
let capitalized = capitalizeWords(statement);
console.log(capitalized); 
