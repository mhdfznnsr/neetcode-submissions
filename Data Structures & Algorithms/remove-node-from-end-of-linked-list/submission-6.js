/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        var totalNodes = 0;
        var temp = head;
        while(temp !== null){
            totalNodes += 1;
            temp = temp.next;
        }
        temp = head;
        var count = totalNodes - n - 1;
        if(count < 0) return head.next;
        while(count > 0){
            count--;
            temp = temp.next;
        }
        temp.next = temp.next.next;
        return head;
    }
}
