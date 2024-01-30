function peopleNames(inputArr) {
    let namesWithNums = [];
    for (let i = 0; i < inputArr.length; i++) {
        namesWithNums.push({
            name: inputArr[i],
            personNumber: inputArr[i].length
        });
    }
    for (let j = 0; j < namesWithNums.length; j++) {
        console.log(`Name: ${namesWithNums[j].name} -- Personal Number: ${namesWithNums[j].personNumber}`);
    }
}

// example input:
peopleNames(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
peopleNames(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);