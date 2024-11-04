import { Model } from "./model.js";


const modelInstance = new Model;
// Base URL for images
const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTQ5YTBkZjcxNWI5MGVlN2VjOTI3YjhjOWMwOGI2MiIsIm5iZiI6MTczMDczNDEwNy4wMTY1MDY0LCJzdWIiOiI2NzFlYmY0OTViZTllODc1OWRhN2E3NzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2TOdzGsRpCcZn-Jpc64TkM0QFSQpXKXXLcMnumLd6CY'; 


const getMovies = async function () {
    try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie', {
            method: 'GET',
            headers:
           {
              'Authorization': `Bearer ${accessToken}`,
              'accept': 'application/json'
            }
          });
          
          if(!response.ok){
            throw new Error(`Error retreiving movie data ${response.status}`)
          }
          const data = await response.json();
          console.log(data);
          data.results.forEach(movie => {
            movie.poster_path = imageBaseUrl+movie.poster_path;
          });
          return data;
    } catch (error) {
        throw new Error(`error: ${error.message}`)
    }
}

export{getMovies};