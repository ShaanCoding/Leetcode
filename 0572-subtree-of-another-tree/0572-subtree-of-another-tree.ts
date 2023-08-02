/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  //   Gave up, on original implementation with string interpolation, seems to complicated as it's every 2nd node, potentially it's hard to do business logic without DFS / BFS

  // Let's try doing a DFS and returning an array of graphs which have the starting value of the subroot
  // Go through all of those DFS's and then determine if any of those are in the set

  if (!subRoot) return true;

  let subRootHeadValue = subRoot.val;
  let returnListArray: TreeNode[] = [];

  dfsMatchesSubRootHead(root, subRootHeadValue, returnListArray);

  // console.log(JSON.stringify(returnListArray));

  // Now compare if these are equal
  for (let graph of returnListArray) {
    if (dfsIsEqual(graph, subRoot)) return true;
  }

  return false;
}

const dfsIsEqual = (
  graphOne: TreeNode | null,
  graphTwo: TreeNode | null
): boolean => {
  if (graphOne == null || graphTwo == null) {
    return graphOne == null && graphTwo == null;
  }

  // Recursive call
  if (
    dfsIsEqual(graphOne?.left, graphTwo?.left) == false ||
    dfsIsEqual(graphOne?.right, graphTwo?.right) == false
  )
    return false;

  return graphOne.val == graphTwo.val;
};

const dfsMatchesSubRootHead = (
  root: TreeNode | null,
  subrootHead: number,
  returnListArray: TreeNode[]
) => {
  if (!root) return;

  if (root.val == subrootHead) returnListArray.push(root);

  // Call left and right for DFS and recursivelyh call
  dfsMatchesSubRootHead(root?.left, subrootHead, returnListArray);
  dfsMatchesSubRootHead(root?.right, subrootHead, returnListArray);
};
