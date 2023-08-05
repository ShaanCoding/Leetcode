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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if(lists.length == 0) return null;
    
    while (lists.length > 1) {
        let mergedLists: Array<ListNode | null> = [];
        
        for(let i = 0; i < lists.length; i += 2) {
            let l1: ListNode | null = lists[i];
            let l2: ListNode | null = ((i + 1) < lists.length) ? lists[i + 1] : null;
            mergedLists.push(mergeList(l1, l2));
        }
        lists = mergedLists;
    }
    return lists[0];

};

function mergeList(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sentinelNode: ListNode | null = new ListNode(0, null);
    let traversalNode: ListNode | null = sentinelNode;
    
    while(l1 != null && l2 != null) {
        if(l1.val > l2.val) {
            traversalNode.next = l2;
            l2 = l2?.next;
        } else {
            traversalNode.next = l1;
            l1 = l1?.next;
        }
        traversalNode = traversalNode?.next;
    }
        
    if(l1 != null) {
        traversalNode.next = l1;
    } else if(l2 != null) {
        traversalNode.next = l2;
    }
            
    return sentinelNode.next;
}