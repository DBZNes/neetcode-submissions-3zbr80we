class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0
        let left = 0
        let right = heights.length - 1

        while (left < right) {
            const maxAmount = (right - left) * Math.min(heights[left], heights[right])
            res = Math.max(res, maxAmount)
            if (heights[left] > heights[right]) {
                right--
            } else {
                left++
            }
        }

        return res
    }
}
