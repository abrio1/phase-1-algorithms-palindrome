function reverse(word) {
  // 'abc' => 'cba'
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input string
  const reversedWord = reverse(word)
  //If the input is the same as the reversed input
  if (word === reversedWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  If the word is the same as the word in reverse, should return true.
  Reverse the input string. 
  If the input is the same as the reversed input,
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  Make a function that returns true if the word is a Palindrome and false if it is not. If the word is the same as the word in reverse, should return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
