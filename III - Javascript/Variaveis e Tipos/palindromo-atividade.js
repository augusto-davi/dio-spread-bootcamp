// primeira solucao
function palindrome(string) {
  const stringToArray = string.split("");
  const reverseArray = stringToArray.reverse();
  const reverseString = reverseArray.join("");
  const palindrome = string === reverseString ? "são palindromos" : "nao sao";
  return palindrome;
}

//segunda solucao
function verifyPalindrome(string) {
  let reverseString = "";

  for (let i = 0; i < string.length; i++) {
    reverseString = string[i] + reverseString;
  }

  return string === reverseString ? "True" : "False";
}
