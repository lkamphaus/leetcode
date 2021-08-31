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
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      console.log(this);
      return this;
    }

    const search = (node) => {
      console.log('this', node);
      if (node.val === val) {
        return undefined;
      }
      if (node.val > val) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          search(node.left);
        }
      } else if (node.val < val) {
        if (node.right === null) {
          node.right = newNode;
        } else {
          search(node.right);
        }
      }
    }

    search(this.root);

    return this;
  }

  find(val) {
     let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      console.log(this);
      return this;
    }

    const search = (node) => {
      console.log('this', node);
      if (node.val === val) {
        return undefined;
      }
      if (node.val > val) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          search(node.left);
        }
      } else if (node.val < val) {
        if (node.right === null) {
          node.right = newNode;
        } else {
          search(node.right);
        }
      }
    }

    search(this.root);

    return this;
  }


}


let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(13);
tree.insert(11);
tree.insert(16);

console.log(tree);