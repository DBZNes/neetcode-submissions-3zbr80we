class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map()
  let result = 0
  let left = 0
  let maxf = 0
  
  for (let right = 0; right < s.length; right++) {
    count.set(s[right], (count.get(s[right]) || 0) + 1)
    console.log(count)
    maxf = Math.max(maxf, count.get(s[right]))
    
    while ((right - left + 1) - maxf > k) {
      count.set(s[left], count.get(s[left]) - 1)
      left += 1
    }
    
    result = Math.max(result, right - left + 1)
  }
  
  return result
    }
}
