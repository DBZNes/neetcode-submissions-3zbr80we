class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = []
        nums.sort((a, b) => a - b)

        for (let i = 0; i < nums.length; i++) {
            const n = nums[i]
            
            if (i > 0 && n == nums[i - 1]) {
                continue
            }

            let left = i + 1
            let right = nums.length - 1

            while (left < right) {
                const tong3 = n + nums[left] + nums[right]
                if (tong3 > 0) {
                    right--
                } else if (tong3 < 0) {
                    left++
                } else {
                    result.push([n, nums[left], nums[right]])
                    left++

                    while (nums[left] == nums[left - 1] && left < right) {
                        left++
                    }
                }
            }
        }

        return result
    }
}
