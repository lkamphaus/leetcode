class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //time complexity O(1)
  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  //time complexity O(n)
  pop() {

    if (this.length === 0) {
      return undefined;
    }

    let curr = this.head;
    let oldTail;

    while (curr.next !== null) {
      if (curr.next === this.tail) {
        oldTail = this.tail;
        curr.next = null;
        this.tail = curr;
        break;
      }
      curr = curr.next;
    }

    this.length--;
    return oldTail.val;
  }
}


let list = new LinkedList();
list.push('HELLO');
list.push('why');
list.push('hi');
list.push('hi2');
list.push('hi3');

console.log(list.pop());
