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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     Nth node from end of list i.e. 5 elements 2 = 4th element 1 index based and then return the head
    // Singly linked list
    
    let sentinelNode: ListNode | null = new ListNode(0, head);
    let traversalNode: ListNode | null = sentinelNode;
    
    // Counts number of nodes     
    let lengthOfArray: number = 0;
    while(traversalNode != null) {
        traversalNode = traversalNode?.next;
        if(traversalNode !== null) lengthOfArray++;
    }
        
    let indexToGoTo = lengthOfArray - n;
    traversalNode = sentinelNode;
        
    while(indexToGoTo > 0) {
        indexToGoTo--;
        traversalNode = traversalNode.next;        
    }
        
    // Goes to before the nth node, and we replace the next with the node after
    traversalNode.next = traversalNode.next.next;
    return sentinelNode.next;
};