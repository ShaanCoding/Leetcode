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

function kthSmallest(root: TreeNode | null, k: number): number {
    // Go through the graph, find the smallest one and keep track of it
    // BFS / DFS works, lets use DFS and have a running count
    
    if(!root) return -1;
    
    let traversalStack: number[] = [];
    dfs(root, traversalStack);
    
    if(k - 1 >= traversalStack.length) return -1;
    
    return traversalStack[k - 1];
};

const dfs = (root: TreeNode | null, traversalStack: number[]): void => {
    if(!root) return;
        
    if(root?.left) dfs(root.left, traversalStack);
    traversalStack.push(root.val);
    if(root?.right) dfs(root.right, traversalStack);
}