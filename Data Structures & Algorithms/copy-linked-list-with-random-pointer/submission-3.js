// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        var head2 = new Node(0);
        var dummy = head2;
        var temp = head;
        var hmap = new Map();
        while(temp !== null){
            var newNode = new Node(temp.val);
            dummy.next = newNode;
            dummy = newNode;
            hmap.set(temp,newNode);
            temp = temp.next;
        }
        dummy = head2.next;
        temp = head;
        while(temp !== null && dummy !== null) {
            dummy.random = hmap.get(temp.random)
            dummy = dummy.next;
            temp = temp.next;
        }
        return head2.next;
    }
}
