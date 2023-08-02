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

function invertTree(root: TreeNode | null): TreeNode | null {
    // Normal tree is fill left then right then down to left then down to the right
    // Inverted tree is right first then left

    // Need to invert

    if(root === null) return null;

    // Swap the children
    let tempVariable: TreeNode | null = root.left;
    root.left = root.right;
    root.right = tempVariable;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};