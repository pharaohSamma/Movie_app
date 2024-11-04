import { Model } from "./model.js";


const modelInstance = new Model;
const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTQ5YTBkZjcxNWI5MGVlN2VjOTI3YjhjOWMwOGI2MiIsIm5iZiI6MTczMDczNDEwNy4wMTY1MDY0LCJzdWIiOiI2NzFlYmY0OTViZTllODc1OWRhN2E3NzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2TOdzGsRpCcZn-Jpc64TkM0QFSQpXKXXLcMnumLd6CY'; 


const getMovies = async function () {
    try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', {
            method: 'GET',
            headers:
           {
              'Authorization': `Bearer ${apiKey}`,
              'accept': 'application/json'
            }
          });
          console.log(response);
          if(!response.ok){
            throw new Error(`Error retreiving movie data ${response.status}`)
          }
          const data = await response.json();
          modelInstance.movieList =  data;
    } catch (error) {
        throw new Error(`error: ${error.message}`)
    }
}

export{getMovies};