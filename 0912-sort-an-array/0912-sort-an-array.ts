// Merge two sorted subarrays into one sorted array
const merge = (arr: number[], low: number, mid: number, high: number): void => {
  // Take left half and right half and merge them
  let left: number[] = arr.slice(low, mid + 1);
  let right: number[] = arr.slice(mid + 1, high + 1);

  let i: number = low;
  let j: number = 0;
  let k: number = 0;

  // Run whilst left and right both have values, but only will run out of values
  while (j < left.length && k < right.length) {
    if (left[j] <= right[k]) {
      arr[i] = left[j];
      j++;
    } else {
      arr[i] = right[k];
      k++;
    }
    i++;
  }

  while (j < left.length) {
    arr[i] = left[j];
    i++;
    j++;
  }

  while (k < right.length) {
    arr[i] = right[k];
    k++;
    i++;
  }
};

// Merge Sort algorithm
const mergeSort = (arr: number[], left: number, right: number): void => {
  // What if the size of the array is 1
  if (left >= right) return;

  let mid: number = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);

  // Merging two halves
  merge(arr, left, mid, right);
};

// Function to sort the input array using Merge Sort
function sortArray(nums: number[]): number[] {
  // Merge Sort, Quick Sort, Radix Sort, HeapSort NLogN
  // NLogN | NLogN or N^2 | BST

  // Given an array, divide and conquer approach
  // Take half and sort it
  // If we break it up into sub problems, and sort these independently
  // Much more efficient i.e. n log n time

  // 9 Elements = N^2 = 81
  // 4 + 5 = 16 + 25 < 81 so more efficient

  // Go down to like two elements and merge i.e. to compare
  // We won't be splitting copies of the array, so when we return up to the parent

  // Merging two arrays
  // Two pointer start of the two return arrays as well as original array
  // put the smaller value at the top, then move pointer forward and then check for the smaller value, then repeat until all items exhausted

  // Why is it N log N?
  // Two phases: Dividing the array into subproblems?
  // How many times can we divide i.e. how many levels
  // Log_2(n) i.e. n = 2^x
  // N values at every level that we need to merge i.e. 4 then 2 + 2 also 4

  mergeSort(nums, 0, nums.length - 1);
  return nums;
}
