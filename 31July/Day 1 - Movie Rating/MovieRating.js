var Movie = function(name,rating){
	this.name = name;
	this.rating = rating;
}

Movie.prototype.toString = function(){
	return this.name + "\t" +this.rating
}

var Movies = function(){}

Movies.prototype.movies = [new Movie("Vikram Veda",5),new Movie("Meesaiya muruku",4)];

Movies.prototype.addMovie = function(name,rating){
	var movie = new Movie(name,rating);
	for(var mov in this.movies){
		if(this.movies[mov].name === name){
			this.movies[mov].rating = rating;
			return;
		}
	}
	this.movies.push(movie);
}

Movies.prototype.getHighestRatedMovie = function(){
	var highestRatedMovie = {rating:0};
	for(var mov in this.movies){
		if(this.movies[mov].rating > highestRatedMovie.rating){
			highestRatedMovie = this.movies[mov];
		}
	}
	return highestRatedMovie.name;
}

document.getElementById("Movies").innerHTML = Movies.prototype.movies;
document.getElementById("HighRatedMovie").innerHTML = Movies.prototype.getHighestRatedMovie();

var addMovie = function(){
	var movieName = document.getElementById("MovieName").value;
	var movieRating = document.getElementById("MovieRating").value;
	Movies.prototype.addMovie(movieName,movieRating);
	document.getElementById("Movies").innerHTML = Movies.prototype.movies;
	document.getElementById("HighRatedMovie").innerHTML = Movies.prototype.getHighestRatedMovie();
}