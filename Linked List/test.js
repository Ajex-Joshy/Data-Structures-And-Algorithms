function node(val) {
  this.val = val;
  this.next = null;
}

function linkedList() {
  this.head = null;
  this.size = 0;
}

const myList = new linkedList();

const node1 = new node(10);
const node2 = new node(20);
const node3 = new node(30);

node1.next = node2;
node2.next = node3;

myList.head = node1;
myList.size = 3;

let current = myList.head;
while (current) {
  console.log(current.val);
  current = current.next;
}
