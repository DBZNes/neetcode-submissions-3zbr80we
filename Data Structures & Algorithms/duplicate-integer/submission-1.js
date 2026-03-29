class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let n = 0; n < nums.length - 1; n++) {
            for (let i = n+1; i < nums.length; i++) {
                let num1 = nums[n]
                let num2 = nums[i]
                if (num1 === num2) {
                    return true
                } 
                if(n === nums.length - 2 && i === nums.length - 1) {                
                    return false
                }
            }
        }
        return false
    }
}
