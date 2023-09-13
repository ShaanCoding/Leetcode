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

function hasCycle(head: ListNode | null): boolean {
    if(!head) return false;
    
    // Check if cycle, means check if the thin exists already (need to go by memory addresses)
    let cycleSet: Set<ListNode> = new Set<ListNode>();
    
    let traversalNode = head;
    
    while(traversalNode !== null) {
        if(cycleSet.has(traversalNode)) return true;
        cycleSet.add(traversalNode);
        traversalNode = traversalNode?.next;
    }
    
    return false;
};