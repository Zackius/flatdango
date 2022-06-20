function fetchMovies() {
    //const navbar = document.querySelector('#beer-list')
    fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(data => {
        return getfilms(data)
    })
}
fetchMovies()

const getfilms = (films) => {
    films.forEach(film => {
        const movietitles = document.querySelector('#films')
        const movielist = document.createElement("li")

        movielist.textContent = film.title
        movietitles.appendChild(movielist)
    });
}