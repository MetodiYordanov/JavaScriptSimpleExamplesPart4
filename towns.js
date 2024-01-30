function townsInfo(inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        const arrElement = inputArr[i].split(' | ');
        const townInfo = {
            town: arrElement[0],
            latitude: parseFloat(arrElement[1]).toFixed(2),
            longitude: parseFloat(arrElement[2]).toFixed(2)
        };
        console.log(townInfo);
    }
}

// example input:
townsInfo(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
townsInfo(['Plovdiv | 135.45 | 812.575']);