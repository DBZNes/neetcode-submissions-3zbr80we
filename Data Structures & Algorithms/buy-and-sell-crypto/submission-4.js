class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0 // buy
        let right = 1 // sell
        let maxProfit = 0
        while (right < prices.length) {
            if (prices[left] < prices[right]) { // buy < sell
                maxProfit = Math.max(maxProfit, prices[right] - prices[left])
            } else {
                left = right
            }
            right++
        }
        return maxProfit
    }
}
