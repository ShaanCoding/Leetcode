function productExceptSelf(nums: number[]): number[] {
  // Go through the entire array find product of all items once, and then divide by once when setting array values -> 2N

  let product = 1;
  let productNoZeros = 1;
  let numberOfZeros = 0;

  nums.forEach((element) => {
    if (element != 0) productNoZeros = productNoZeros * element;
    else numberOfZeros++;

    product = product * element;
  });

  if (numberOfZeros > 1) productNoZeros = 0;

  return nums.map((element) => {
    if (element !== 0) return product / element;
    else return productNoZeros;
  });
}
