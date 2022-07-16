/* EXERCISE 1
  Given the object below, write a piece of code for programmatically removing the last skill from the skills array inside the me object.
 */

const me = {
  name: "Joh",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.skills.pop();
console.log(me);

/* EXERCISE 2
  Write a piece of code to create an array of only ODD numbers from 1 to 100
   */
const array1 = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    array1.push(i);
  }
}
console.log(array1);
/* EXERCISE 3
  Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 100 inclusive
   */

const array3 = [];
for (let i = 1; i <= 10; i++) {
  const random = Math.floor(Math.random() * 101 + 1);
  array3.push(random);
}
console.log(array3);
/* EXERCISE 4
    Write a piece of code for getting only even numerical values from an array . 
   */

// const array4 = [];
// for (let i = 0; i <= 10; i++) {
//   const even = i % 2 === 0;
//   array4.push(even);
// }
// console.log(array4);

const even = [];
for (let i = 0; i < array3.length; i++) {
  if (array3[i] % 2 === 0) {
    even.push(array3[i]);
  }
}
console.log(even);
/* EXERCISE 5
  Write a piece of code to sum up the numbers in an array
   */
let sum = 0;
for (let i = 0; i < array3.length; i++) {
  sum = sum + array3[i];
}
console.log(sum);
/* EXERCISE 6
   Write a piece of code for increasing all the numerical values in a array by 1.
  */

const array6 = [9, 99, 999];
for (let i = 0; i < array6.length; i++) {
  array6[i] = array6[i] + 1;
}
console.log(array6);

/* EXERCISE 7 (EXTRA)
   Write a piece of code for deleting only even entries from an array.
  */

const array7 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];
for (let i = 0; i < array7.length; i++) {
  if (array7[i] % 2 === 0) {
    array7.splice(i--, 1);
  }
}
console.log(array7);
/* EXERCISE 8
  Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 10 inclusive WITHOUT duplicates
   */

const array8 = [];
for (let i = 1; i <= 10; i++) {
  const rand = Math.floor(Math.random() * 100 + 1);
  if (!array8.includes(rand)) {
    array8.push(rand);
  }
}
console.log(array8);
/* EXERCISE 9
   Replace all the strings contained in an array with their length.
   es.: ["strive", "is", "great"] => [6, 2, 5]
  */

const array9 = ["strive", "is", "great"];
for (let i = 0; i < array9.length; i++) {
  array9[i] = array9[i].length;
}
console.log(array9);
/* EXERCISE 10
   Write a piece of code for reverting an array.
   es:
   [1, 3, 5] ==> [5, 3, 1]
  */

const array10 = [1, 3, 5];
array10.reverse();

console.log(array10);
/* EXERCISE 11
   Write a piece of code for getting the maximum numerical value from an array.
  */
const array11 = [1, 5, 9, 100, 2, -6];
let max = array11[0];
for (let i = 0; i < array11.length; i++) {
  if (array11[i] > max) {
    max = array11[i];
  }
}
console.log(max);

/* This movies array is used throughout the exercises. You're not supposed to alter it. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* EXERCISE 12
      Write a piece of code to  find the oldest movie in the provided movies array.
  */

let maxYear = parseInt(movies[0].Year);
let oldestMovie;
for (let i = 0; i < movies.length; i++) {
  const parsedYear = parseInt(movies[i].Year);
  if (parsedYear < maxYear) {
    oldestMovie = movies[i];
  }
}
console.log(oldestMovie);
/* EXERCISE 13
      Write a piece of code to get the number of movies contained in the provided movies array.
  */
const total = movies.length;
console.log(total);
/* EXERCISE 14
      Write a piece of code to create an array with just the titles of the movies contained in the provided movies array.
  */

const titles = [];
for (let i = 0; i < movies.length; i++) {
  titles.push(movies[i].Title);
}
console.log(titles);

/* EXERCISE 15
     Write a piece of code to get only the movies produced in this millennium from the provided movies array.
  */
const thisMil = [];
for (let i = 0; i < movies.length; i++) {
  if (parseInt(movies[i].Year) > 2000) {
    thisMil.push(movies[i]);
  }
}
console.log(thisMil);
/* EXERCISE 16
     Write a piece of code to get  the movie with the  id given below from the provided movies array.
  */
const id = "tt0355702";
let moviesById = [];

for (let i = 0; i < movies.length; i++) {
  if (movies[i].imdbID === id) {
    moviesById.push(movies[i]);
  }
}
console.log(moviesById);

/* EXERCISE 17
       Write a piece of code to get  the  the sum of all the years in which the movies in the provided movies array have been produced.
  */
let yearSum = 0;
for (let i = 0; i < movies.length; i++) {
  yearSum = yearSum + parseInt(movies[i].Year);
}
console.log(yearSum);
/* EXERCISE 18
     Write a piece of code to get  all the movies in the provided movies array which contain the string value (provided below) in the title.
  */
const query = "Avengers";
const result = [];
for (let i = 0; i < movies.length; i++) {
  if (movies[i].Title.includes(query)) {
    result.push(movies[i]);
  }
}
console.log(result);
