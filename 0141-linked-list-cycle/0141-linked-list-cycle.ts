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
    // Set see if it's visited, if we reach null then it's fine

    let navigatorHead: ListNode | null = head;
    let visitedSet: Set<ListNode | null> = new Set();

    while(navigatorHead != null) {
        if(visitedSet.has(navigatorHead)) return true;
        else {
            visitedSet.add(navigatorHead);
            navigatorHead = navigatorHead?.next;
        }
    }

    return false;
};