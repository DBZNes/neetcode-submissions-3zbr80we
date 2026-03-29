class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const result = []
        let forward = 1
        for (let i = 0; i < n; i++) {
            result.push(forward)
            forward *= nums[i]
        }

        let backward = 1
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= backward
            backward *= nums[i]
        }
        return result
    }
}
