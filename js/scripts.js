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
var prime = 2;
var multiple;
var pos;
//var primes = numbers.slice();

for (var index = 2; index <= iteration; index += 1) {
  numbers.push(index);
}


var primeGenerator = function(iteration) {

  for (var index = 2; index <= iteration; index += 1) {
    numbers.push(index);
  }
  var primes = numbers.slice();

  alert("numbers: " + numbers);
  alert("primes: " + primes);

  for (var index = 1; index < numbers.length; index += 1) {

    for (var index = 1; prime + (prime * index)< iteration; index +=1) {
      multiple = (prime +(prime * index));
console.log("primes before" + primes);
console.log("current multiple" + multiple);
      pos = primes.indexOf(multiple);
      console.log("index position" + pos);

//        notPrimes.push(multiple);
      if (pos > 0) {
         primes.splice(pos,1);
      } else {
        alert(prime)
      }
        console.log("primes after: " + primes);
        // prime += 1;
        // alert("multiple : " + multiple + "Position: " + pos)
        // alert("primes: " + primes);
    }
      prime += 1;
  }



//console.log(numbers);
console.log(pos);

}








//front-end
$(document).ready(function() {

  $(".nInput form").submit(function(event) {
  //  console.log("beforetest");
//debugger;
    event.preventDefault();
  //  console.log("test");

iteration = parseInt($("input#nValue").val());

primeGenerator(iteration);
//console.log(primes);
//console.log(prime);
  });
});
