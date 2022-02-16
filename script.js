'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Skol`ko filmov vi yzhe posmotreli?",'');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Skol`ko filmov vi yzhe posmotreli?",'');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Little');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Normal');
        } else if (personalMovieDB.count >= 30) {
            console.log('Hype');
        } else {
            console.log('error!');
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Favourite genres${i+1}?`,"");
            if (genre == '' || genre == null) {
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Fav genre #${i+1} - is ${item}`);
        });
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('Acces error!');
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();
// showMyDB();
// console.log(personalMovieDB);