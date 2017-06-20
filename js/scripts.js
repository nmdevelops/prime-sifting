//pass value of "n" from input
//create an array of numbers - Done
//number is whole number - input 4 - output true
//1//number is greater than 1 - input 2 - output true
//** we think this test is pointless....number % 1 === 0 - input 7 - output true
// number % number !== 0 - input 9 - output false
//
//back-end
//var iteration = 23;
//var iteration = parseInt($("input#nValue").val());
var numbers = [];
var notPrimes = [];
var iteration;
var prime = 2
// var cycle = math.sqrt(iteration / prime

var primeGenerator = function(iteration) {

  for (var index = 2; index <= iteration; index += 1) {
    numbers.push(index);
  }

  for (var index = 1; prime * prime * index< iteration; index +=1) {
    // if (notPrimes [-1]) < iteration {
      notPrimes.push(prime * (prime * index));
    //}
     alert(notPrimes);
  }
console.log(numbers);


}








//front-end
$(document).ready(function() {

  $(".nInput form").submit(function(event) {
    console.log("beforetest");
debugger;
    event.preventDefault();
    console.log("test");

iteration = parseInt($("input#nValue").val());

primeGenerator(iteration);
//alert(numbers);
  });
});
