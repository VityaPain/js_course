"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Skol`ko filmov vi yzhe posmotreli?",'');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Skol`ko filmov vi yzhe posmotreli?",'');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Last film?",''),
                b = prompt('Point?','');
        
        if (a != null && b != null & a != '' && b != '' && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Little');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Normal');
    } else if (personalMovieDB.count >= 30) {
        console.log('Hype');
    } else {
        console.log('error!');
    }
}

detectPersonalLevel();


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Favourite genres${i+1}?`,"");
        if (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
            i--;
        }
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('Acces error!');
    }
}
showMyDB();
// console.log(personalMovieDB);