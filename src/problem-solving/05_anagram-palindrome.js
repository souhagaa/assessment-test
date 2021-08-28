/**
 * Check if the given string is an anagram of a palindrom
 *
 * Example
 * s = 'aabbccdd'
 * One way this can be arranged into a palindrome is abcddcba. Return true.
 *
 * Constraints
 * contains only lowercase letters in the range ascii[a..z]
 */

const isPalindromePossible = (str) => {
    let count = {}
    let i;
    for (i = 0; i < str.length; i++){
        !count[str[i]] ? count[str[i]] = 1 : count[str[i]]++
    }
    let isPalindrome = 0;
    for (i in count){
       if(count[i] % 2 !== 0){
           if(isPalindrome > 1) return false;
           isPalindrome ++;
       }
    }
    return true ;
}

module.exports.isPalindromePossible = isPalindromePossible