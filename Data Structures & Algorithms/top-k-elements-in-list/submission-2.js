class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()  
        for (const n of nums) {
            map.set(n, (map.get(n) || 0) + 1) 
        }

        const buckets = Array(nums.length + 1).fill().map(() => [])

        for (const [key, freq] of map.entries()) {
            buckets[freq].push(key)
        }

        const result = []
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i])
            }
        }

        return result.slice(0, k)
    }
}
