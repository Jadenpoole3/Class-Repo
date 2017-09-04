// 1
let sumOfNums = function(numsArray) {
    let sum = 0;
    for for (var i = 0; i < numsArray.length; i++) {
        sum += numsArray[i];     
}
return sum;

//2

let numsGreaterThanTen = funtion(numsArray) {
    let results = [];
    for (let i = 0; i <numsArray.length; i++) {
        if (numsArray[i] > 10) {
          results.push(numsArray[i]);
        }
      }
      return results;

      //3 

      let allGreaterThanTen = function(numsArray) {
        for (let i = 0; i < numsArray.length; i++) {
          if ((numsArray[i] > 10)) {
            return false;
          }
        }
        return true;

        //4

        let wordsWithAtLeastFiveLetters = function(words) {
            let results = [];
            for (let i = 0; i < words.length; i++) {
              if (words[i].length < 6 {
                results.push(words[i]);
              }
            }
            return results;
            
//5 
            let allStartingWithA = function(words) {
                for (let i = 0; i < words.length; i++) {
                  if ((words[i].slice(0, 1) === 'a' || words[i].slice(0, 1) === 'A')) {


  // 6
            let anyStartingWithB = function(words) {
                for (let i = 0; i < words.length; i++) {
                  if (words[i].slice(0, 1) === 'b' || words[i].slice(0, 1) === 'B') {
                    return true;
                  }
                }
                return false;


//7 


//8

let wordsWithAtLeastTwoVowels = function(words) {
    let results = [];
    for (let i = 0; i < words.length; i++) {
      if (hasAtLeastNVowels(words[i], 2)) {
        results.push(words[i]);
      }
    }
    return results;

    //9
    var allHaveAtLeastTwoVowels = function(words) {
        for (var i = 0; i < words.length; i++) {
          if (!hasAtLeastNVowels(words[i], 2)) {
            return false;
          }
        }
        return true;


//10

let anyHaveAtLeastTwoVowels = function(words) {
    for (let i = 0; i < words.length; i++) {
      if (hasAtLeastNVowels(words[i], 2)) {
        return true;
      }
    }
    return false;


//11
let noneHaveTwoOrMoreVowels = function(words) {
    for (let i = 0; i < words.length; i++) {
      if (hasAtLeastNVowels(words[i], 2)) {
        return false;
      }
    }
    return true;

    //12
    let buildObjectFromWords = function(words) {
        let result = {};
        for (let i = 0; i < words.length; i++) {
          result[words[i]] = words[i].length;
        }
        return result;
      };
      