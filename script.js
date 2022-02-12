"use strict";

// first task
let numberOfFilms = +prompt('How many books do you read?',"1");

// second task
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

alert("Ya enlan");

// third task
const a = prompt('Last film watched you',''),
    c = prompt('Point',''),
    b = prompt('Last film watched you',''),
    d = prompt('Point','');

// personalMovieDB.movies = {
//     a: c,
//     b: d
// };
personalMovieDB.movies[a] = c;
personalMovieDB.movies[b] = d;
    
console.log(personalMovieDB);
    