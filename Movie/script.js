// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, 
//    and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
    constructor(title, studio, rating){
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
}
const mov = new Movie("The Good Dinosour","Pixar Animation Studios","PG-7");
console.log(mov)

// Output:
// Movie {
//   title: 'The Good Dinosour',
//   studio: 'Pixar Animation Studios',
//   rating: 'PG-7'
// }

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

 class Movie1 {
    constructor(title,studio,rating="PG") {
         this.title = title;
         this.studio = studio;
         this.rating = rating;
    }
 }
 const mov1 = new Movie1("Kantara","KRG Studios")
 console.log(mov1)

//  Output:
// Movie1 { title: 'Kantara', studio: 'KRG Studios', rating: 'PG' }

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". 
//    You may assume the input array is full of Movie instances. The returned array need not be full.

  class Movies {
    constructor(title,studio,rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(input){
        return input.filter((movie) => movie.rating === "PG")
    }
  }
  let mov0 = new Movies("Veeram","Vijaya Production","PG")
  let mov2 = new Movies("Vikram", "Raj Kamal Films","PG-13")
  let mov3 = new Movies("Thunivu","Zee Studios", "PG")

  let movArray = [mov0,mov2,mov3]
  let pgMovies = Movies.getPG(movArray)
  console.log(pgMovies)

// Output:
// [
//   Movies { title: 'Veeram', studio: 'Vijaya Production', rating: 'PG' },
//   Movies { title: 'Thunivu', studio: 'Zee Studios', rating: 'PG' }
// ]


// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
//    the studio “Eon Productions”, and the rating “PG­13”

class movie {
    constructor(title, studio, rating){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
}
const pro = new movie("Casino Royale","EON Productions","PG13")
console.log(pro)

// movie {
//   title: 'Casino Royale',
//   studio: 'EON Productions',
//   rating: 'PG13'
// }