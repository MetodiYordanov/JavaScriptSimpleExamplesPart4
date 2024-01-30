function findWord(searchedWord, input) {
    input = input.toLowerCase();
    const isWordFound = input.split(' ').includes(searchedWord);
    if (isWordFound) {
        console.log(searchedWord);
    }
    else {
        console.log(`${searchedWord} not found!`);
    }
}

// example input:
findWord('javascript', 'JavaScript is the best programming language');
findWord('python', 'JavaScript is the best programming language');