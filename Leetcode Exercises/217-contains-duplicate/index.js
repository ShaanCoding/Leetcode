// Returns true if the value appears at least twice and return false if every value is distinct
var containsDuplicate = (nums) => {
  // List through all elements O(n^2) and compare

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i !== j) return true;
    }
  }

  return false;
};

var containsDuplicate2 = (nums) => {
  // Add everything to a set and see if lengths are different
  let newSet = new Set(nums); // O(n)

  if (nums.length == newSet.size) {
    return false;
  } else {
    return true;
  }
};

var containsDuplicate3 = (nums) => {
  return new Set(nums).length == nums.length;
};

// Alternative method with Maps (slower but more readable)
var containsDuplicate4 = (nums) => {
  // New hashmap with all items in array, duplicates will be removed
  const totalWithoutDuplicates = new Map(nums.map((i) => [i]));

  return totalWithoutDuplicates.size !== nums.length;
};

console.log(containsDuplicate2([1, 2, 3, 4]));

module.exports = { containsDuplicate, containsDuplicate2 };
