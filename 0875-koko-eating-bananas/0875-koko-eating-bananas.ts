/*
    Koko loves to eat bananas
    
    There are n piles of bananas the ith pile has piles[io] bananas
    
    Guards will come back in h banana
    
    Coco can decide her bananas per hour speed is k
    
    Each hour she chooses some piles and eats k from that mile
    
    After she eats k bananas she will not eat more
    
    She wants to eat all banans within k hours
    
*/

function minEatingSpeed(piles: number[], h: number): number {
    // Find maximum bananas
    let left: number = 1, right: number = 1;
    
    for(let pile of piles) {
        right = Math.max(right, pile);
    }
    
    while(left < right) {
        let middle = Math.floor((left + right) / 2);
        let hours = 0;
        
        for(const pile of piles) {
            hours += Math.ceil(pile / middle);
        }
        
        if(h >= hours) {
            right = middle
        } else {
            left = middle + 1;
        }
    }
    
    return left;
    
    
    // Left and right from lowest banans
    
    // Keep checking if valid for use case
    
    //  if hoursSpent <= h then split
    // else set left to increase
};