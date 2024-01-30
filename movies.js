function movieInfo(inputArr) {
    const movies = [];
    for (const command of inputArr) {
        if (command.includes('addMovie')) {
            const movieName = command.replace('addMovie ', '');
            movies.push({
                name: movieName
            });
        }
        else if (command.includes('directedBy')) {
            const movieName = command.substring(0, command.indexOf('directedBy')).trim();
            const directedBy = command.substring(command.indexOf('directedBy') + 'directedBy'.length).trim();
            
            const result = movies.find(movie => movie.name === movieName);
            if (result) {
                result.director = directedBy;
            }
        }
        else if (command.includes('onDate')) {
            const movieName = command.substring(0, command.indexOf('onDate')).trim();
            const onDate = command.substring(command.indexOf('onDate') + 'onDate'.length).trim();
        
            const result = movies.find(movie => movie.name === movieName);
            if (result) {
                result.date = onDate;
            }
        }
    }
    movies.filter(movie => movie.date && movie.director && movie.name)
          .forEach(movie => console.log(JSON.stringify(movie)));
}

// example input:
movieInfo(['addMovie Fast and Furious', 'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);
movieInfo(['addMovie The Avengers', 'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo']);