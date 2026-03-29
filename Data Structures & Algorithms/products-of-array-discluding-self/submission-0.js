class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = []
        for (let i = 0; i < nums.length; i++){
            const arr = [...nums]
            arr.splice(i, 1)

            const product = arr.reduce((acc, val) => acc * val, 1)
            result.push(product)
        }
        return result
    }
}
