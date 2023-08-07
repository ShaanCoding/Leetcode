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

function deepestLeavesSum(root: TreeNode | null): number {
//     At the deepest level BFS deepest level
    if(!root) return 0;
    
    let returnSum: number = 0;
    let bfsStack: TreeNode[] = [root];
    
    while(bfsStack.length !== 0) {
        let length = bfsStack.length;
        let levelSum: number = 0;
        
        for(let i = 0; i < length; i++) {
            let node: TreeNode | null = bfsStack[0];
            bfsStack.shift();
            if(!node) break;
            
            levelSum += node.val;
            if(node?.left) bfsStack.push(node.left);
            if(node?.right) bfsStack.push(node.right);
        }
        returnSum = levelSum;
    }
    
    return returnSum;
};