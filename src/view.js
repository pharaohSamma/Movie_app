import { getMovies } from "./controller.js";
import { Model } from "./model.js";


const modelInstance = new Model;
const movieView = document.getElementById('movieList');
movieView.innerHTML = '';


async function moviesView(){
    const moviesList = await getMovies();
    movieView.innerHTML=`
    <h2>test</h2>
    `;
    movieView.appendChild(movieView);
}

