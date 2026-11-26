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
    reorderList(head) {
        var st = new Array();
        var slow = head;
        var fast = head;
        var temp = head;
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        // slow = slow.next;
        while(slow !== null) {
            st.push(slow);
            slow = slow.next;
        }
        while(st.length > 0){
            var next = temp.next;
            var node = st.pop();
            if(node === temp) {
                temp.next = null;
                break;
            }
            temp.next = node;
            node.next = next;
            temp = next;
        }
        temp.next = null;
        return head;

    }
}
