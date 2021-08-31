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
      this.tail = this.head;
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
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldTail.val;
  }

  //time complexity O(1)
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    return oldHead.val;
  }

    //time complexity O(1)
  unshift(val) {
    let newHead = new Node(val);

    if (this.length === 0) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
    }

    this.head = newHead;

    this.length++
    return this;
  }

  //time complexity O(n)
  get(index) {
    let count = 0;
    let curr = this.head;

    if (index > this.length || index < 0) {
      return null;
    }

    while (count < this.length) {
      if (count === index) {
        return curr;
      } else {
        curr = curr.next;
        count = count + 1;
      }
    }
  }

  set(index, val) {
    let curr = this.get(index);

    if (!curr) {
      return false;
    }

    curr.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;

    return true;
  }
}


let list = new LinkedList();
list.push('HELLO');
list.push('why');
list.push('hi');



