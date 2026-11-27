class ListNode {
    constructor(key, val, next = null, prev = null) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.hmap = new Map();
        this.head = new ListNode(0,0);
        this.tail = new ListNode(0,0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    removeNode(node){
        var prv = node.prev;
        var nxt = node.next;
        prv.next = nxt;
        nxt.prev = prv;
    }
    insertNode(node){
        var prv = this.tail.prev;
        prv.next = node;
        node.prev = prv;
        node.next = this.tail;
        this.tail.prev = node;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.hmap.has(key)){
            var node = this.hmap.get(key);
            this.removeNode(node);
            this.insertNode(node);
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.hmap.has(key)){
            this.removeNode(this.hmap.get(key));
        }
        var node = new ListNode(key,value);
        this.hmap.set(key,node);
        this.insertNode(node);
        if(this.hmap.size > this.capacity){
            var node = this.head.next;
            this.hmap.delete(node.key);
            this.removeNode(node);
        }
    }
}
