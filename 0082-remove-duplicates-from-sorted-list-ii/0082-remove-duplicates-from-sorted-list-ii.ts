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
//     Return a linked list in a sorted list, removing duplicate numbers1
    
    // Traverse to all, add to Set, sort set and then convert to linked list
    // O(n) + O(klogk) + O(k)
    
//     One pass without sorting
    
    let frequencyHashMap: Map<number, number> = new Map<number, number>();
    
    while(head !== null) {
        frequencyHashMap.set(head.val, (frequencyHashMap.get(head.val) || 0) + 1);
        head = head?.next;
    }
    
    let goodArray = [];
    for(let [key, value] of frequencyHashMap) {
        if(value == 1) goodArray.push(key);
    }
    
//     Form the new linkedList
    let sentinelNode: ListNode | null = new ListNode(0, null);
    let traversalNode = sentinelNode;
        
    for(let i = 0; i < goodArray.length; i++) {
        traversalNode.next = new ListNode(goodArray[i], null);
        traversalNode = traversalNode.next;
    }
        
    return sentinelNode.next;
};