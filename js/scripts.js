//back-end

var numbers = [];
var iteration;
var prime;
var multiple;
var primes = [];

var formReset = function() {
  primes = [];
  numbers = [];
  prime = 2;
  $(".result").hide();
}

var primeGenerator = function(iteration) {
  for (var n = 2; n <= iteration; n += 1) {
    numbers.push(n);
  }
  primes = numbers.slice();
  for (var i = 1; i < iteration; i += 1) {
    for (var index = 1; prime + (prime * index)<= iteration; index +=1) {
      multiple = (prime +(prime * index));
      var pos = primes.indexOf(multiple);
      if (pos > 0) {
         primes.splice(pos,1);
      }
       else {
      }
    }
    prime += 1;
  }
}
//front-end
$(document).ready(function() {
  $("input#nValue").click(function() {
    formReset();
  });
  $(".nInput form").submit(function(event) {
    formReset();
    event.preventDefault();
    iteration = parseInt($("input#nValue").val());
    primeGenerator(iteration);
    $(".result").show();
    $("#numbers").text(numbers);
    $("#primes").text(primes);
  });
});
