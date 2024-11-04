import { getMovies } from "./controller.js";
import { Model } from "./model.js";


const modelInstance = new Model;
const movieView = document.getElementById('movieList');
movieView.innerHTML = '';

window.addEventListener('load', async()=>{
    moviesView();
})
async function moviesView(){
    const moviesList = await getMovies();
    console.log('movies list',moviesList);
    moviesList.results.forEach(movie => {
        movieView.innerHTML +=`
        <div class="movieItem">
            <img src="${movie.poster_path}">
            <div class="content">
                <h1 class="name">${movie.original_title}</h1>
                <h3 class="info">
                    <i></i> ${movie.vote_average} | ${movie.release_date}
                </h3>
                <p class="short-desc">${movie.overview}</p>
            </div>
        </div>
        `
    });
}

