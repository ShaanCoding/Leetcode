/*
    Given an array of prices maximise by choosing a single day to buy
    Choosing different day IN THE FUTURE to sell the stock
    If no profit find 0
*/

function maxProfit(prices: number[]): number {
    let maximumProfit = 0;

    // Go through it in O(n) -> left and right pointer
    // Assign left point to inflection point (where it starts going upwards)
    // Once it starts going downwards, we assign the local maxima and compare
    // When the next inflation point is found, this is the left most pointer

    let minimumValue = prices[0];

    for(let i = 0; i < prices.length; i++) {
        if(minimumValue > prices[i]) minimumValue = prices[i];

        if(prices[i] - minimumValue > maximumProfit) maximumProfit = prices[i] - minimumValue; 
    }


    return maximumProfit;
};