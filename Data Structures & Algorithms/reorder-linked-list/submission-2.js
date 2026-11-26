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
     * @return {void}
     */
    reverseList(head){
        var prev = null;
        var curr = head;
        while(curr !== null){
            var next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    reorderList(head) {
        var st = new Array();
        var slow = head;
        var fast = head;
        var temp = head;
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        var head2 = this.reverseList(slow.next);
        slow.next = null;
        while(head2 !== null){
            var next = temp.next;
            temp.next = head2;
            temp = next;
            next = head2.next;
            head2.next = temp;
            head2 = next;
        }
        return head;

    }
}
