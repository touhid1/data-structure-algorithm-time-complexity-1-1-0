class Node {
    constructor(value){
        this.value =value;
        this.next = null;

    }
}
class LinkedList {
    constructor(head){
        this.head = head;
    }
    add(value){
        const  newNode = new Node(value);
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode
    }
}
const head = new Node(1500);
const mBondhon = new LinkedList(head);
mBondhon.add(24)
mBondhon.add(43)
mBondhon.add(87)
mBondhon.add(54)
mBondhon.add(65)
console.log(JSON.stringify(mBondhon));