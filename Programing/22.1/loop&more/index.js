function cart() {
  var nop = parseInt(prompt("Please enter the number of products"));

  // declare array in js (empty)
  // var fullOfShit = ["pasta", "pizza", "fl", "coffee", "", null, undefined, 0, true];
  // var p = Array();
  var products = [];
  while (nop > 0) {
    // DO WHAT EVER YOU WANT
    var currentProduct = prompt("Please Enter the name of the product!?");
    products.push(currentProduct);
    // nop = nop - 1
    nop--;
  }

  console.log(products);
}
cart();

function movies() {
  var nom = parseInt(prompt("Please enter the number of movies"));

  // declare array in js (empty)
  // var fullOfShit = ["pasta", "pizza", "fl", "coffee", "", null, undefined, 0, true];
  // var p = Array();
  var movies = [];
  while (nom > 0) {
    // DO WHAT EVER YOU WANT
    var currentMovie = prompt("Please Enter the name of the movie!?");
    movies.push(currentMovie);
    // nop = nop - 1
    nom--;
  }

  console.log(movies);
}
movies();
