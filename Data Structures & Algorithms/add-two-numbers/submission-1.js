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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        var carry = 0;
        var head = new ListNode(0);
        var temp = head;
        while(l1 !== null || l2 !== null){
            var l1Val = l1 === null ? 0 : l1.val;
            var l2Val = l2 === null ? 0 : l2.val;
            var sum = l1Val + l2Val + carry;
            var carry = Math.floor(sum / 10);
            var value = sum % 10;
            var node = new ListNode(value);
            temp.next = node;
            temp = node;
            if(l1 !== null) l1 = l1.next;
            if(l2 !== null) l2 = l2.next;
        }
        if(carry > 0) temp.next = new ListNode(1);
        return head.next;
    }
}
