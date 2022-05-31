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


