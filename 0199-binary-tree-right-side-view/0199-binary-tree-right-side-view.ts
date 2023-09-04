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

function rightSideView(root: TreeNode | null): number[] {
    // We just want the very right node from each layer i.e. bfs
    
    if(!root) return [];
    
    let stack: TreeNode[] = [root];
    
    let rightModeElement: number[] = [];
    
    while(stack.length !== 0) {
        let array: TreeNode[] = [];
        let stackLength = stack.length;
        
        for(let i = 0; i < stackLength; i++) {
            let element: TreeNode = stack.shift();
            
            array.push(element);
            
            if(element?.left) stack.push(element.left);
            if(element?.right) stack.push(element.right);
        }
        
        // Get right most element
        if(array.length !== 0) rightModeElement.push(array[array.length - 1].val);
    }
    
    return rightModeElement;
};