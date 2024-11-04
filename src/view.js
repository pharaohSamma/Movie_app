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
        <h2>${movie.original_title}</h2>
        </div>
        `
    });
}

