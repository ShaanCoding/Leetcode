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

function levelOrder(root: TreeNode | null): number[][] {
    // Literally just Breadth first
    if(!root) return [];
    
    let returnNode: number[][] = [];
    
    let bfsStack: TreeNode[] = [root];
    
    while(bfsStack.length !== 0) {
        // For loop
        let level: number[] = [];
        let length: number =  bfsStack.length;
        
        for(let i = 0; i < length; i++) {
            let node: TreeNode | null = bfsStack[0];
            bfsStack.shift();
            if(!node) break;
            
            level.push(node.val);
            if(node.left) bfsStack.push(node.left);
            if(node.right) bfsStack.push(node.right);
        }
        
        returnNode.push(level);
    }
    
    return returnNode;
};