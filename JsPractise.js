"use strict";
const numberOfFilms = +prompt("How many movies did you wached?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   a = prompt("Last movie you wached?", ""),
        b = prompt("How much do you rate it?", ""),
        c = prompt("Last movie you wached?", ""),
        d = prompt("How much do you rate it?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

