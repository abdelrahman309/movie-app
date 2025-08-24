const API_KEY = "b243051a535860469b2923017792403a";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const hero = document.getElementById("hero");
const heroTitle = document.getElementById("hero-title");
const heroOverview = document.getElementById("hero-overview");
const pageNumber = document.getElementById("page-number");

let currentPage = 1;
let lastUrl = API_URL;

getMovies(API_URL + currentPage);

async function getMovies(url) {
  lastUrl = url;
  const res = await fetch(url);
  const data = await res.json();

  if (data.results.length !== 0) {
    showHero(data.results[0]);
    showMovies(data.results);
    pageNumber.innerText = currentPage;
  } else {
    main.innerHTML = `<h2 class="no-results">No Results Found</h2>`;
  }
}

function showHero(movie) {
  hero.style.backgroundImage = `url(${
    movie.backdrop_path ? IMG_PATH + movie.backdrop_path : ""
  })`;
  heroTitle.innerText = movie.title;
  heroOverview.innerText = movie.overview || "No description available.";
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img src="${
        poster_path
          ? IMG_PATH + poster_path
          : "https://via.placeholder.com/500x750"
      }" alt="${title}" />
      <div class="movie-info">
        <h3>${title}</h3>
        <p>${overview ? overview : "No description available."}</p>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
    `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 7.5) return "green";
  else if (vote >= 5) return "orange";
  else return "red";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    currentPage = 1;
    getMovies(SEARCH_API + searchTerm + "&page=" + currentPage);
    search.value = "";
  } else {
    window.location.reload();
  }
});

// Pagination
document.getElementById("next").addEventListener("click", () => {
  currentPage++;
  getMovies(API_URL + currentPage);
});

document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    getMovies(API_URL + currentPage);
  }
});
