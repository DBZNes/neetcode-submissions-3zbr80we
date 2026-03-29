class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for (const str of strs) {
            const strLen = String(str.length).padStart(4, 0)
            result += strLen + str
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0
        // 0005Hello0005World
        while (i < str.length) {
            const len = Number(str.slice(i, i + 4))
            i += 4
            const word = str.slice(i, i + len)
            result.push(word)
            i += len 
        }

        return result 
    }
}
