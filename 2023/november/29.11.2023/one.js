// LeetCode 

/* 
 Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

 

Constraints:

    1 <= pattern.length <= 300
    pattern contains only lower-case English letters.
    1 <= s.length <= 3000
    s contains only lowercase English letters and spaces ' '.
    s does not contain any leading or trailing spaces.
    All the words in s are separated by a single space.


*/ 

var wordPattern = function (pattern, s) {
//First of all, create an array contains words from s.
//And a template to track key value pairs (we use this a bit later)
  const arr = s.split(" "),temp = {};

//Check if both has the same length and amount of unique charactors.
  if (arr.length !== pattern.length || 
new Set([...pattern]).size !== new Set(arr).size) return false;
  
//Iterate over the pattern. 
//1.If template has not seen pattern before,
//add patter as key word as value.
//2. Else, compare, return false if key value do not match.
  for (let i = 0; i < pattern.length; i++) {
    if (!temp[pattern[i]]) {temp[pattern[i]] = arr[i];}
     else if (temp[pattern[i]] !== arr[i]) {return false;}
  }
  return true;
};
