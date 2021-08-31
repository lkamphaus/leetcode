class Node  {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
    } else if (this.root.val > val) {
      if (!this.root.left) {
        this.root.left = val;
      }
    }
  }

  search(val) {

  }
}