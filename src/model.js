class Model{
static instance;

movieList = [];

constructor(){
    if(Model.instance){
        return Model.instance
    }
    Model.instance = this;
}

getMovieList(){
    return this.movieList
}

setMovieList(){
    return this.movieList
}
}

export{Model};