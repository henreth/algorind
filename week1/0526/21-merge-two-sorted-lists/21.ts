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

 function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // initialize a dummy head node
    let mergedHead = { val : -1, next : null }, 
    crt = mergedHead; // initialize a crtNode variable to keep track of the current node, starting with the dummy head node
    while(l1 && l2) { // while there are still nodes to compare in two lists
        if(l1.val > l2.val) { // if value of 2nd node is less than value of 1st node
            crt.next = l2; // set the current node's link to l2 node
            l2 = l2.next; // set the l2 node to l2's next node
        } else { // else
            crt.next = l1; // set the current node's link to l1 node
            l1 = l1.next; // set the l1 node to l1's next node
        }
        crt = crt.next; // move on to the next node
    }
    crt.next = l1 || l2; // if one of the lists no longer have any nodes to compare, point crt's link to the remaining nodes in the other list
    // if both lists are empty, point crt's link to null
    return mergedHead.next; // return merged linked list
};