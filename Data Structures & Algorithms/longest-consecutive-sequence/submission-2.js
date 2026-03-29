class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let longest = 0

        for (const n of set) {
            if (!set.has(n - 1)) {
                // let seq = [n]
                let curr = n
                let length = 1

                while (set.has(curr + 1)) {
                    curr++
                    length++
                    // seq.push(curr)
                }

                // if (seq.length > longestSeq.length) {
                //     longestSeq = seq
                // }
                longest = Math.max(length, longest)
            }
        }
        return longest
    }
}
