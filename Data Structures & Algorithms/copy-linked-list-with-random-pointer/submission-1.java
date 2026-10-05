/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
        Node chead = new Node(0);
        Node ctemp = chead;
        Node temp = head;
        HashMap<Node,Node> hmap1 = new HashMap<>();
        HashMap<Integer,Node> hmap2 = new HashMap<>();
        int count = 0;
        while(temp != null){
            count++;
            Node curr = new Node(temp.val);
            ctemp.next = curr;
            hmap1.put(temp,curr);
            ctemp = ctemp.next;
            temp = temp.next;
        }
        temp = head;
        ctemp = chead.next;
        while(temp != null){
            if(temp.random != null){
                Node node = hmap1.get(temp.random);
                ctemp.random = node;
            }
            temp = temp.next;
            ctemp = ctemp.next;
            
        }
        return chead.next;
    }
}
