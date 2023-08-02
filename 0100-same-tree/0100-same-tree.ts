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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // Check if it's the same tree, we can do bfs with a comparison check

  // Do a DFS call left and call right, if not true then cascade to top and return false, else return true

  // Exit condition is end of nodes
  if(p == null || q == null) {
      if(p == null && q == null) return true;
      else return false;
  }

  if (isSameTree(p.left, q.left) == false || isSameTree(q.right, p.right) == false)
    return false;

  return p.val == q.val;
}
