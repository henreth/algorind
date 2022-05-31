function maxProfit(prices: number[]): number {
    let left = 0 
    let right = 1 
    let max_profit = 0
    while (right < prices.length) {
        let currentProfit = prices[right] - prices[left] 
        if (prices[left] < prices[right]){ 
            max_profit = Math.max(currentProfit,max_profit) 
        }
        else{
            left = right} 
        right += 1
    }
    return max_profit
};


// var maxProfit = function(prices) {
//     let profit = 0;
//     let min = prices[0];
    
//     for(let i = 1; i < prices.length; ++i) { 
//         if(min > prices[i]) {
//             min = prices[i];
//         } else if(prices[i] - min > profit) {
//             profit = prices[i] - min;
//         }
//     }
    
//     return profit;
// };



