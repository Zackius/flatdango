function fetchMovies() {
    //const navbar = document.querySelector('#beer-list')
    fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(data => {
        return getfilms(data)
    })
}   