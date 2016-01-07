//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var trimInput = input.trim();
  var inputLength = input.length;
  var lastChar = input.charAt(inputLength -1);
  if (input.match(/[A-Z]/g) && input === input.toUpperCase()) {
    return 'Whoa, chill out!';
  } else if (trimInput === '') {
    return 'Fine. Be that way!';
  } else if (lastChar === '?') {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
