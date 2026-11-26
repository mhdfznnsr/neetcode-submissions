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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(list1 === null) return list2;
        if(list2 === null) return list1;
        var head = new ListNode(0);
        var temp = head;

        while(list1 !== null && list2 !== null){
            var next = null;
            console.log(list1.val,list2.val)
            if(list1.val < list2.val){
                temp.next = list1;
                temp = list1;
                next = list1.next;
                list1.next = null;
                list1 = next;
            }
            else{
                temp.next = list2;
                temp = list2;
                next = list2.next;
                list2.next = null;
                list2 = next;
            }
        }
        if(list1 !== null) temp.next = list1;
        if(list2 !== null) temp.next = list2;
        return head.next;
    }
}
