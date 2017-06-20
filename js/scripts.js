//back-end

var numbers = [];
var iteration;
var prime;
var multiple;
var primes = [];

var primeGenerator = function(iteration) {


  for (var n = 2; n <= iteration; n += 1) {
    numbers.push(n);
  }

  primes = numbers.slice();

  for (var i = 1; i < iteration; i += 1) {

    for (var index = 1; prime + (prime * index)<= iteration; index +=1) {
      multiple = (prime +(prime * index));
console.log("current multiple" + multiple);
      var pos = primes.indexOf(multiple);
      console.log("index position" + pos);

      if (pos > 0) {
         primes.splice(pos,1);
      }
       else {
      console.log("value doesn't exist within array primes");
      }
        console.log("prime after: " + prime);

    }
      prime += 1;
      console.log(primes);
      console.log(prime);

  }
console.log("functioncomplete");
}


//front-end
$(document).ready(function() {
  $("input#nValue").click(function() {
    primes = [];
    numbers = [];
  });
  $(".nInput form").submit(function(event) {
    primes = [];
    numbers = [];
    prime = 2;
    event.preventDefault();
    iteration = parseInt($("input#nValue").val());
    primeGenerator(iteration);
  });
});
