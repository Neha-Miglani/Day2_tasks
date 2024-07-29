function calculateTotalScore(arr) {
    let total = 0;
    arr.forEach(item => {
        total += item.score;
    });
    return total;
}

const scores = [
    { score: 10 },
    { score: 20 },
    { score: 30 },
    { score: 20 },
    { score: 10 },
    { score: 10 },
];

const totalScore = calculateTotalScore(scores);
console.log(totalScore);
