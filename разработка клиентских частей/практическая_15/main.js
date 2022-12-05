fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', {
    "method": "GET",
    "headers": {
        'x-rapidapi-host': "online-movie-database.p.rapidapi.com",
        'x-rapidapi-key': "ea754eb47dmsh195dade10e2661cp13afaajsn82a395bc8738"
    }
})

.then(response => response.json())
.then(data => {
    const list = data.d;
    list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img srс="${poster}"> <h2>${name}</h2></li>`
        document.querySelector(' .movies').innerHTML += movie;
    })
})
.catch(err => {
    console.error(err);
});
