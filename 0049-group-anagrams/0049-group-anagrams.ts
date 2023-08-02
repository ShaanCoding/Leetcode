// Given an array, we want to group anagrams together
// eat, tea, ate -> ate we can sort these all key value pair to sorted hash add them all in the end
// Key is sortedName, value is array and then convert to array in the end

function groupAnagrams(strs: string[]): string[][] {
  let hashMapResponse = new Map();

  for (let i = 0; i < strs.length; i++) {
    let stringSorted = strs[i].split("").sort().join("");

    if (hashMapResponse.has(stringSorted)) {
      hashMapResponse.set(stringSorted, [
        ...hashMapResponse.get(stringSorted),
        strs[i],
      ]);
    } else {
      hashMapResponse.set(stringSorted, [strs[i]]);
    }
  }

  return Array.from(hashMapResponse.values());
}
