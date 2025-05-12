// maxProfit.ts

function maxProfit(prices: number[]): number {
    let profit = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i - 1] > 0) {
            profit += prices[i] - prices[i - 1]
        }
    }

    return profit;
};

const prof = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(prof)
