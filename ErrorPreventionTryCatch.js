const addTwoNums = (a, b) => {
    try {
        if (typeof (a) != 'number') {
            throw ReferenceError('First argument is not a number');
        }
        if (typeof (b) != 'number') {
            throw ReferenceError('Second argument is not a number');
        }
        let c = a + b;
        console.log("The sum of two number is:", c)

    } catch (error) {
        console.log('Error Occured', error)
    }
}
addTwoNums(5, 3);
console.log('It Still Works')