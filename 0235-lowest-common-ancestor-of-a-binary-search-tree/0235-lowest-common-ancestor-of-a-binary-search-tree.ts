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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  // 	Recursive method

  let parentVal = root.val;

  //     Value of P
  let pVal = p.val;
  let qVal = q.val;

  if (pVal > parentVal && qVal > parentVal) {
    //         If both q & p are greater than parent
    return lowestCommonAncestor(root.right, p, q);
  } else if (pVal < parentVal && qVal < parentVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    // Have found LCA
    return root;
  }
}
