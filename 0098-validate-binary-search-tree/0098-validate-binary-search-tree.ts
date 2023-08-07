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

function isValidBST(root: TreeNode | null): boolean {
  if (!root || (root?.left == null && root?.right == null)) return true;

  return dfs(root, -Infinity, Infinity);
}

const dfs = (
  node: TreeNode,
  lowerBound: number,
  upperBound: number
): boolean => {
  if (node.val <= lowerBound || node.val >= upperBound) return false;

  if (node.left) {
    if (!dfs(node.left, lowerBound, node.val)) {
      return false;
    }
  }

  if (node.right) {
    if (!dfs(node.right, node.val, upperBound)) {
      return false;
    }
  }

  return true;
};
