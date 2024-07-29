function pass(students) {
    return students.filter((student) => student.score >= 60);
}

const students = [
    { name: 'A', score: 50 },
    { name: 'B', score: 60 },
    { name: 'C', score: 40 },
    { name: 'D', score: 100 },
    { name: 'E', score: 90 },
];

console.log(pass(students));