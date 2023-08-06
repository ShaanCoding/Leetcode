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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    // BFS and then for every even odd one, we will inverse the array for the specific level
    if(!root) return [];
    
    let returnResponse: number[][] = [];    
    let bfsStack: TreeNode[] = [root];
    
    while(bfsStack.length !== 0) {
        let level: number[] = [];
        let length = bfsStack.length;
        
        for(let i = 0; i < length; i++) {
            let node: TreeNode | null = bfsStack[0];
            bfsStack.shift();
            
            if(!node) break;

            level.push(node.val);
            if(node?.left) bfsStack.push(node.left);
            if(node?.right) bfsStack.push(node.right);
        }
        
        if(returnResponse.length % 2 == 1) {
            level = level.reverse();
        }
        
        returnResponse.push(level);
    }
                            
    return returnResponse;
    
};