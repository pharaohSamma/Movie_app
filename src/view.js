import { getGenres, getMovies, nextPage, previousPage } from "./controller.js";
import { Model } from "./model.js";


const modelInstance = new Model();
const movieView = document.getElementById('movieList');
const genreView = document.getElementById('genreList');
const nextButton = document.getElementById('nxt-btn');
const previousButton = document.getElementById('prv-btn');


nextButton.addEventListener('click', async () => {
    const page = nextPage();
    await moviesView(page);
});

previousButton.addEventListener('click',async () => {
    const page = previousPage();
    await moviesView(page);
})



window.addEventListener('load', async()=>{
    moviesView(1);
    genresView();
});


async function moviesView(page){
    const moviesList = await getMovies(page);
    movieView.innerHTML = '';
    console.log('movies list',moviesList);
    moviesList.results.forEach(movie => {
        movieView.innerHTML +=`
        <div class="movieItem">
            <img src="${movie.poster_path}">
            <div class="content">
                <h1 class="name">${movie.original_title}</h1>
                <h3 class="info">
                    <i></i> ${(movie.vote_average*10).toFixed(1)}% | ${movie.release_date}
                </h3>
                <p class="short-desc">${movie.overview}</p>
            </div>
        </div>
        `
    });
}

async function genresView() {
    const genreList = await getGenres();
    console.log("genre list",genreList.genres[0].name);
    genreList.genres.slice(0,5).forEach(genre =>{
        genreView.innerHTML += `
        <li><a href="#">${genre.name}</a></li>
        `
    })
    
}

