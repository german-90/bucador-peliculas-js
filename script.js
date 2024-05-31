document.getElementById("searchButton").addEventListener("click", searchMovie)

let apikey = "a586c1486bcbeb6bceb2fb07fb348158"
let url = "https://api.themoviedb.org/3/search/movie"
let urlPoster = "https://image.tmdb.org/t/p/w200"
let showResults = document.getElementById("results")

function searchMovie() {
    showResults.innerHTML = "Cargando..."
    let movie = document.getElementById("searchInput").value
    fetch(`${url}?query=${movie}&api_key=${apikey}`)
        .then(response => response.json())
        .then(response => ShowMovies(response.results))
}

function ShowMovies(movies) {
    console.log(movies)
    showResults.innerHTML = ""

    movies.forEach(movie => {
        let movieDiv = document.createElement("div")
        movieDiv.classList.add("movie")

        let poster = document.createElement("img")
        poster.src = urlPoster + movie.poster_path

        let titleMovie = document.createElement("h2")
        titleMovie.textContent = movie.title

        let releaseDate = document.createElement("p")
        releaseDate.textContent = movie.release_date

        let summary = document.createElement("p")
        summary.textContent = movie.overview

        let votes = document.createElement("p")
        votes.textContent=  "Puntuacion: " + movie.vote_average

        movieDiv.appendChild(poster)
        movieDiv.appendChild(titleMovie)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(summary)
        movieDiv.appendChild(votes)

        showResults.appendChild(movieDiv)
    });

}