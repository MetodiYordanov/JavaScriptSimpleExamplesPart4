function oddOccurrences(input) {
    const separatedWords = input.toLowerCase().split(' ');
    let wordsWithCounts = {};
    for (const word of separatedWords) {
        if (Object.keys(wordsWithCounts).includes(word)) {
            wordsWithCounts[word] += 1;
        }
        else {
            wordsWithCounts[word] = 1;
        }
    }
    console.log(Object.keys(wordsWithCounts).filter(word => wordsWithCounts[word] % 2 !== 0).join(' '));
}

// example input:
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');