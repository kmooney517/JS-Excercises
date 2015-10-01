// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

// ---------------------------
// 1. Find largest number
// ---------------------------
function findLargestNumber(numbers){
  var largestNumber = numbers.reduce(function(largest, current) {
    if (current > largest) {
      return current;
    }
    else {
      return largest;
    };
  });
  return largestNumber;
};

// ---------------------------
// 2. Find longest string
// ---------------------------
function findLongestString(strings) {
  var longestString = strings.reduce(function(longest, current){
    if (current.length > longest.length) {
      return current;
    }
    else {
      return longest;
    };
  });
  return longestString;
};

// ---------------------------
// 3. Find even numbers
// ---------------------------
function findEvenNumbers(numbers) {
  var evenNumbers = numbers.filter(function(number){
    return (number%2) === 0;
  });
  return evenNumbers;
};


// ---------------------------
// 4. Find odd numbers
// ---------------------------
function findOddNumbers(numbers) {
  var oddNumbers = numbers.filter(function(number){
    return (number%2) === 1;
  });
  return oddNumbers;
};

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function findIsWords(strings) {
  var isWords = strings.filter(function(eachString){
    return eachString.indexOf('is') >= 0; //cant figure out why this has to be zero to work.
  });
  return isWords;
};


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

  var bothArrays = strings.concat(numbers); //googled MDN to find the .concat method
    console.log(bothArrays);


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------


//I know this doesn't work - but this is how far I got.

// function jsInstructors(instructors) {
//   var jsInstruct = instructors.filter(function(eachInstructor){
//       return { name : eachInstructor.indexOf('JavaScript')} >=0;
//   });
//   return jsInstruct;
// };





















