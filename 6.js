var assert = require("assert");

function generateSeries(start, end) {
  var numbers = [];

  for (var i = start; i < end + 1; i++) {
    numbers.push(i);
  }

  return numbers;
}

function getSumSquareDifference(sequence) {
  var sumSquares = sequence.reduce(function(prev, curr) {
    return prev + Math.pow(curr, 2);
  }, 0);

  var squareSum = sequence.reduce(function(prev, curr) {
    return prev + curr;
  }, 0);

  var squareSum = Math.pow(squareSum, 2);

  return squareSum - sumSquares;
}

describe('Project Euler #6 - Sum square difference', function () {
  describe('generateSeries', function() {
    it('should return array with 10 elements with numbers from 1 to 10', function() {
      assert.equal(generateSeries(1, 10).length, 10);
      assert.deepEqual(generateSeries(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  describe('getSumSquareDifference', function() {
    it('should return 2640 as a difference between the sum of the squares and the square of the sum for first 10 natural numbers.', function() {
      assert.equal(2640, getSumSquareDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    });

    it('should return 25164150 as a difference between the sum of the squares and the square of the sum for first 100 natural numbers.', function() {
      var sequence = generateSeries(1, 100);
      assert.equal(25164150, getSumSquareDifference(sequence));
    });
  });
});
