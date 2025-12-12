/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxprofit = 0
    let minbuy = prices[0]
    for (let i = 0; i < prices.length; i++) {
        minbuy = Math.min(prices[i], minbuy)
        maxprofit = Math.max(maxprofit, prices[i] - minbuy)
    }
    return maxprofit
};