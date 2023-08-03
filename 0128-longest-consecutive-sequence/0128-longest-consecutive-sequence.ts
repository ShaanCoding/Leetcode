function longestConsecutive(nums: number[]): number {
  // Unsorted array of integers nums, return the length of the longest consecutive elements sequence
  // [100, 4, 200, 1, 3, 2]

  //     Longest consecutive, where i.e. the strings are incrementing
  //     nums[i] + 1 === nums[i + 1]

  if (nums.length === 0) return 0;

  //     Brute force sort
  let sortedNums: number[] = nums.sort((a, b) => a - b);

  let maximumConsecutive = 1;
  let currentConsecutive = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] == nums[i - 1] + 1) currentConsecutive++;
      else {
        maximumConsecutive = Math.max(maximumConsecutive, currentConsecutive);
        currentConsecutive = 1;
      }
    }
  }

  return Math.max(maximumConsecutive, currentConsecutive);
}
