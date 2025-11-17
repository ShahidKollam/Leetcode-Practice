/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0
    let buy = Infinity


    for (let i = 0; i < prices.length ; i++) {
        buy = Math.min(prices[i], buy)
        
        const daysell = prices[i] - buy

        profit = Math.max(daysell, profit)
        // profit = buy - sell
    }
    return profit

};