/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode temp = head;
        int len = 0;
        while(temp != null){
            temp = temp.next;
            len++;
        }
        int offset = len - n + 1;
        int count = 0;
        ListNode prev = null;
        ListNode curr = head;
        if(len == 1 || offset == 1){
            return head.next;
        }
        while(true){
            count++;

            if(count == offset){
                prev.next = curr.next;
                break;
            }
            prev = curr;
            curr = curr.next;
            
            
        }
        return head;

    }
}
