/*
    1. there are other ways to solve it but i solved using stack
    2. traverse the list and add the nodes to stack.
    3. when stack size equals k then reverse the nodes of stack and make
        pointers adjust themselves to satisfy the needs of problem
*/

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
        //find the first kth node which will be head at the end
        for(int i=1;i<k;i++){
            curr = curr.next;
        }
        ListNode res = curr;
        //used to point to next group reversed list first node
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
