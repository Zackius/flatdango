document.addEventListener("DOMContentLoad", (e) => {
  e.preventDefault();
  fetchMovies();
});

function fetchMovies() {
  //const navbar = document.querySelector('#beer-list')
  fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((data) => {
      return getfilms(data);
    });
}
fetchMovies();
const getfilms = (films) => {
  films.forEach((film) => {
    const movietitles = document.querySelector("#films");
    const movielist = document.createElement("li");

    movielist.textContent = film.title;
    movietitles.appendChild(movielist);

    movielist.addEventListener("click", () => {
      const imagePoster = (document.getElementById("poster").src = film.poster);
      console.log(imagePoster);

      const title = document.querySelector("#title");
      title.textContent = film.title;

      const duration = document.querySelector("#runtime");
      duration.textContent = `${film.runtime} Minutes`;

      const description = document.querySelector("#film-info");
      description.textContent = film.description;

      const showtime = document.querySelector("#showtime");
      showtime.textContent = film.showtime;

      const remainingTickets = document.querySelector("#ticket-num");
      const availSeats = film.capacity - film.tickets_sold;
      remainingTickets.textContent = availSeats;

      const buyTicket = document.querySelector("#buy-ticket");
      buyTicket.addEventListener("click", () => {
        if (availSeats > 0) {
          const actualSeats = availSeats - 1;
          remainingTickets.textContent = actualSeats;
          alert("Thank you and Enjoy your Movie");
        } else {
          alert("Apologies, Tickets out of Stock");
        }
      });
    });
  });
};
