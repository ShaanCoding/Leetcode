  // Given two 0 indexed arrays, return a list of answers of size 2 where
    // answer[0] is all distinct integers not present in nums 2
    // answer[1] is all distinct integers of nums2 not present in nums1

    // Intersections, one that's not present in nums1 and the other nums2

    // nums1 = [1,2,3] nums2 = [2,4,6] => [[1,3], [4,6]]

    // Could go through for loop1, take all items, go through for loop2 and yoink all items out, return delta O(2nm)

    // If converted to a Set for nums1 and num2, we could check if each item is in a set (hashed so O(1) lookup) and then create an array

function findDifference(nums1: number[], nums2: number[]): number[][] {
    let responseOne: Set<number> = new Set(nums1);
    let responseTwo: Set<number> = new Set(nums2);
    
    for(let value of responseOne) {
        if(responseTwo.has(value)) {
            responseOne.delete(value);
            responseTwo.delete(value);
        }
    }

    return [Array.from(responseOne), Array.from(responseTwo)];
};