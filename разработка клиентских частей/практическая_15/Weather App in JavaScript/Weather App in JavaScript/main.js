const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3432afa829msh927835279fedf82p12d9f1jsn659292e42071',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));