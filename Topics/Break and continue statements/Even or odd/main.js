function checkEvenOrOdd(numbers) {
    // write your code here
    for (const n of numbers) {
        if (n === 0) {
            break;
        } else if (n % 2 === 0) {
            console.log('even');
        } else {
            console.log('odd');
        }
    }
}