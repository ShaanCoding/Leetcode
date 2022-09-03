/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {    
    // Listen, Example, Draw, Algorithm Pseudocode, Implement, Edgecase
    
    // Pseudocode
    /*
    // BASE CASE (Before recursion): Initialize previousElement, currentElement
    // store currentElement.next
    // For previousElement.next = null
    
    // Recursion
        1st iteration: currentElement.next store this variable
            currentElement.next = previous
            
            Make previous 2, make current 3
    
    // Terminal Case
        AFTER NULL CONDITION
        Check if temporary, instead of assining we terminate
    
    */
    
    if(!head) return null;
    
    let previousElement = head;
    let currentElement = head.next;
    // previous element
    previousElement.next = null;
    
    while(currentElement?.val !== undefined) {
          // 1st iterator: 
          let temporaryVariable = currentElement.next;
          currentElement.next = previousElement;
          // iterate forward
          previousElement = currentElement;
          currentElement = temporaryVariable;
    }
    
    // Return array     
    return previousElement; 
};