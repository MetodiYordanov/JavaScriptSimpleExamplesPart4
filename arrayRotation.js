function rotateArray(inputArr, numOfRotations) {
    for (let i = 0; i < numOfRotations; i++) {
        const currentFirstElement = inputArr.shift();
        inputArr.push(currentFirstElement);
    }
    console.log(inputArr.join(' '));
}

// example input:
rotateArray([51, 47, 32, 61, 21], 2);
rotateArray([32, 21, 61, 1], 4);
rotateArray([2, 4, 15, 31], 5);