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

function isSymmetric(root: TreeNode | null): any {
    // OHHH THIS IS JUST COMPARING LEFT AND RIGHT NODES I.E. TWO DIFFERENT GRAPHS

    if(root == null) return true;

    let leftNode: TreeNode | null = root.left;
    let rightNode: TreeNode | null = root.right;

    // Lets do recursive
    return isEqual(leftNode, rightNode);  
};

const isEqual = (p: TreeNode | null, q: TreeNode | null): boolean => {

    if(p == null || q == null) {
        if(p == null && q == null) return true;
        else return false;
    }

    // Compare by doing DFS
    if(isEqual(p.left, q.right) == false || isEqual(p.right, q.left) == false) {
        return false;
    }

    return p.val == q.val;
}