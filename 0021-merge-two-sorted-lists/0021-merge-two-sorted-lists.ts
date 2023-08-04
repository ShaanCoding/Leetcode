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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy: ListNode | null = new ListNode(-1, null);
    let returnArray: ListNode | null = dummy;
    
    
//     Head is now defined, let's continue until all null
        while(list1 !== null && list2 !== null) {
            if(list1.val > list2.val) {
                returnArray.next = new ListNode(list2.val, null);
                list2 = list2?.next;
            } else {
                returnArray.next = new ListNode(list1.val, null);
                list1 = list1?.next;
            }
            returnArray = returnArray.next;

        }
                
        if(list1 !== null) {
            returnArray.next = new ListNode(list1.val, list1?.next);
        } else if (list2 !== null) {
            returnArray.next = new ListNode(list2.val, list2?.next);            
        }
                
        return dummy.next;
};