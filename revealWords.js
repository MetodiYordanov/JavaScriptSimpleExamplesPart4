function showWords(wordsToReveal, sentence) {
    const wordsToRevealArr = wordsToReveal.split(', ');
    let sentenceInArr = sentence.split(' ');
        for (let i = 0; i < sentenceInArr.length; i++) {
            if (sentenceInArr[i].includes('*')) {
                for (let j = 0; j < wordsToRevealArr.length; j++) {
                    if (wordsToRevealArr[j].length === sentenceInArr[i].length) {
                        sentenceInArr[i] = wordsToRevealArr[j];
                    }
                }
            }
        }
    console.log(sentenceInArr.join(' '));
}

// example input:
showWords('great', 'softuni is ***** place for learning new programming languages');
showWords('great, learning', 'softuni is ***** place for ******** new programming languages');