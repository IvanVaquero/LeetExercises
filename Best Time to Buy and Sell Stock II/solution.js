/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let cur = prices[0];
    let profit = 0;
    for(let i=1; i<prices.length; i++){
        if(prices[i] > cur){
            profit += prices[i] - cur;
            cur = prices[i];
        } else if (prices[i] < cur){
            cur = prices[i];
        }
    }
    return profit;
};