class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0

        let left = 0
        let right = 1

        while (right < prices.length) {
            const buy = prices[left]
            const sell = prices[right]

            if (sell < buy) {
                left = right
                right++
                continue
            }

            max = Math.max(max, sell - buy)
            right++
        }
        return max
    }
}
