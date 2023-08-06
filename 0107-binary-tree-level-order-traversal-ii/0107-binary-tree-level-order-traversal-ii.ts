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

function levelOrderBottom(root: TreeNode | null): number[][] {
//     Just BFS but reversed?
    if(!root) return [];
    
    let returnArray: number[][] = [];
    let queue: TreeNode[] = [root];
    
    while(queue.length !== 0) {
        let length: number = queue.length;
        let level: number[] = [];
        
        for(let i = 0; i < length; i++) {
            let node: TreeNode | null = queue[0];
            queue.shift();
            if(!node) break;
            
            level.push(node.val);
            if(node?.left) queue.push(node.left);
            if(node?.right) queue.push(node.right);
        }
        returnArray.unshift(level);
    }
    
    return returnArray;
};