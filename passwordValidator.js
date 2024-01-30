function validatePassword(input) {
    const errors = [];
    const regexForLettersAndDigitsOnly = /^[a-zA-Z0-9]+$/;
    const countOfDigits = (word) => {
        let counter = 0;
        for (const char of word) {
            if (!isNaN(parseInt(char))) {
                counter++;
            }
        }
        return counter;
    };

    const numOfDigitsInString = countOfDigits(input);
    if (input.length < 6 || input.length > 10) {
        errors.push('Password must be between 6 and 10 characters');
    }
    if (!input.match(regexForLettersAndDigitsOnly)) {
        errors.push('Password must consist only of letters and digits');
    }
    if (numOfDigitsInString < 2) {
        errors.push('Password must have at least 2 digits');
    }

    if (errors.length === 0) {
        console.log('Password is valid');
    }
    else {
        for (const error of errors) {
            console.log(error);
        }
    }
}

// example input:
validatePassword('logIn');
validatePassword('MyPass123');
validatePassword('Pa$s$s');