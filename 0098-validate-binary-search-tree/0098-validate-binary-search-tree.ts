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
    const inorder = (root: TreeNode): boolean => {
        if(!root) return true;
        
        if(!inorder(root?.left)) return false;
        if(prev != null && root.val <= prev) return false;
        prev = root.val;
        
        return inorder(root?.right);
    }
    
    let prev: number = null;
    return inorder(root);
};