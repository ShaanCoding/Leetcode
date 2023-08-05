/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
//     Sliding window, method we have our sentinelNode to navigate through, and a navigation one (current and previous), if current == current.next, move forward until false and then make previous.next = new node and repeat
    
    let sentinelNode: ListNode | null = new ListNode(0, head);
    
    let prevNode: ListNode | null = sentinelNode;
    let currNode: ListNode | null = sentinelNode.next;
    
    while(currNode !== null) {
        
//         If next val is equal to the same
        if(currNode?.next !== null && currNode.next.val === currNode.val) {
           while(currNode?.next !== null && currNode.val == currNode?.next.val) {
                currNode = currNode.next;
            }
            prevNode.next = currNode.next;
        } else {
            prevNode = prevNode.next;
        }
        
        currNode = currNode?.next;
    }
        
    return sentinelNode.next;
};