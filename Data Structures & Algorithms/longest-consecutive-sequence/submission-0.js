class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let longestSeq = []

        for (const n of set) {
            if (!set.has(n - 1)) {
                let seq = [n]
                let curr = n

                while (set.has(curr + 1)) {
                    curr++
                    seq.push(curr)
                }

                if (seq.length > longestSeq.length) {
                    longestSeq = seq
                }
            }
        }
        return longestSeq.length
    }
}
