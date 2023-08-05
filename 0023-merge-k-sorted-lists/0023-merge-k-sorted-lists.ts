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
    // Given an array list of LL we want to make one linked list from smallest to largest
    
    let isAllNull: boolean = false;
    
    let sentinelNode: ListNode | null = new ListNode(0, null);
    let traversalNode = sentinelNode;
    
    while(isAllNull === false) {
        // get smallest value and for that one let's iterate it
        let smallestValue: number = Infinity;
        for(let i = 0; i < lists.length; i++) {
            if(smallestValue > lists[i]?.val) smallestValue = lists[i].val;
        }
        
        // for(let list of lists) {
        //     if(smallestValue > list?.val) smallestValue = list.val;
        // }
            
        // Iterate smallestval one forward one
        for(let i = 0; i < lists.length; i++) {
            if(lists[i]?.val == smallestValue) {
              lists[i] = lists[i]?.next;
              break; 
           }
        }
            
        // for(let list of lists) {
        //     if(smallestValue == list?.val) {
        //        list = list?.next;
        //        break;
        //    }
        // }
        
        if(smallestValue != Infinity) {
            traversalNode.next = new ListNode(smallestValue, null);
            traversalNode = traversalNode.next;
        } else {
            isAllNull = true;
        }
    }
        
    return sentinelNode.next;
};