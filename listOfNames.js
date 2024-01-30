function listNames(inputArr) {
    inputArr.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < inputArr.length; i++) {
        console.log(`${i + 1}.${inputArr[i]}`);
    }
}

// example input:
listNames(['John', 'Bob', 'Christina', 'Ema']);