class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.replaceAll(/[^a-zA-Z0-9]/g,'').toLowerCase()
        const reversed = str.split('').reverse().join('')
        return str === reversed
    }
}
