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
    public ListNode reverseKGroup(ListNode head, int k) {
        Stack<ListNode> s = new Stack<>();
        ListNode curr = head;
        for(int i=1;i<k;i++){
            curr = curr.next;
        }
        ListNode res = curr;
        ListNode tail = null;
        curr = head;
        while(curr != null){
            s.push(curr);
            curr = curr.next;
            if(s.size() == k){
                ListNode t = curr;
                if(tail != null){
                    tail.next = s.peek(); 
                }
                while(!s.empty()){
                    ListNode node = s.pop();
                    if(!s.empty()){
                        node.next = s.peek();
                    }
                    else{
                        node.next = t;
                        tail = node;
                    }
                }
            }
            
            
        }
        return res;
    }
}
