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
    public ListNode mergeLists(ListNode l1, ListNode l2){
        ListNode dummy = new ListNode();
        ListNode curr = dummy;
        while(l1 != null && l2 != null){
            if(l1.val < l2.val){
                curr.next = l1;
                curr = curr.next;
                l1 = l1.next;
            }
            else{
                curr.next = l2;
                curr = curr.next;
                l2 = l2.next;
            }
        }
        if(l1 != null) curr.next = l1;
        else curr.next = l2;

        return dummy.next;
    }
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) {
            return null;
        }
        
        while(lists.length > 1){
            List<ListNode> mergedLists = new ArrayList<>();
            int i = 0;
            while(i < lists.length){
                ListNode l1 = lists[i];
                ListNode l2 = (i + 1) < lists.length ? lists[i + 1] : null;
                mergedLists.add(mergeLists(l1,l2));
                i += 2;
            }
            lists = mergedLists.toArray(new ListNode[0]);
            
        }
        return lists[0];
    }
}
