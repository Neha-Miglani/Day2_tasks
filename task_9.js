function promiseCalculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        switch (operation) {
            case 'addition':
                resolve(num1 + num2);
                break;
            case 'subtraction':
                resolve(num1 - num2);
                break;
            case 'multiplication':
                resolve(num1 * num2);
                break;
            case 'division':
                if (num2 === 0) {
                    reject(new Error('Cannot divide by zero.'));
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject(new Error('Invalid operation.'));
        }
    });
}

promiseCalculator(7, 3, 'addition')
    .then(result => console.log('Result of 7 + 3:', result))
    .catch(error => console.error('Error:', error.message));

promiseCalculator(5, 0, 'division')
    .then(result => console.log('Result of 5 / 0:', result))
    .catch(error => console.error('Error:', error.message));

promiseCalculator(10, 2, 'mod')
    .then(result => console.log('10 % 2:', result))
    .catch(error => console.error('Error:', error.message));

promiseCalculator(50, 40, 'subtraction')
    .then(result => console.log('Result of 50 - 40:', result))
    .catch(error => console.error('Error:', error.message));
