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

function reverseList(head: ListNode | null): ListNode | null {
    let previousNode: ListNode | null = null;
    let currentNode: ListNode | null = head;

    while(currentNode != null) {
        let temp = currentNode.next;
        currentNode.next = previousNode;
        
        previousNode = currentNode;
        currentNode = temp;
    }

    return previousNode;
};