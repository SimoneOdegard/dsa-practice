class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);

    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

// ====================  T R A V E R S E ==================== //

function traverse(ll) {
  let current = ll.head;

  while(current) {
    console.log('ll node:', current);
    current = current.next;
  }
} 

let ll = new LinkedList();
ll.push(54);
ll.push(72);
ll.push(36);
ll.push(12);
ll.push(12);
ll.push(28);

traverse(ll);