function topKFrequent(nums: number[], k: number): number[] {
  // Top k most frequent elements, find the k most occuring elements

  // Hashmap to get frequency of each item

  // Then we need to get kth largest items, how to sort?, make an array of values, sort O(logn * n) + find values O(n);

  let frequencyHashMap: Map<number, number> = new Map();

  for (let item of nums) {
    frequencyHashMap.set(item, (frequencyHashMap.get(item) || 0) + 1);
  }

  // Let get greatest values largest -> smallest
  let arrayOfFrequencies: number[] = Array.from(frequencyHashMap.values()).sort(
    (a, b) => b - a
  );

  // Get kth greatest items
  let returnArray: number[] = [];

  for (let i = 0; i < k; i++) {
    // Find hashMa pwith value of arrayOfFrequencies[i] and add to returnArray
    for (let [key, value] of frequencyHashMap) {
      if (value == arrayOfFrequencies[i]) {
        returnArray.push(key);
        frequencyHashMap.set(key, -1);
        break;
      }
    }
  }

  return returnArray;
}
