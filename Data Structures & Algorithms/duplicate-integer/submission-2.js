class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newNums = nums.sort()
        for (let i = 1; i < nums.length; i++) {
            if (newNums[i] == newNums[i-1]) return true
        }
        return false
    }
}
