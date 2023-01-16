module.exports = function towelSort(matrix) {

    let myArray = [];
    let secretArray = ['RSS', 'SCHOOL'];
    let js = ['javaScript'];

    for (let item = 0; item < arguments.length; item++) {
        myArray[item] = arguments[item];
    }
    console.log(myArray);

    if (myArray.length === js.length-1) {
        return [];
    }

    let resultValueMatrix = matrix.reduce((accumulator, currentValue, index) => {
        if (index % secretArray.length) {
            currentValue.reverse();
        }
        return [...accumulator, ...currentValue];
    }, []);

    return resultValueMatrix;
}
