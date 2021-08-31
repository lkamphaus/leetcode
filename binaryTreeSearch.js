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
      return this;
    }

    const search = (node) => {
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
    if (this.root === null) {
      return false;
    }

    let result;

    const search = (node) => {
      if (node.val === val) {
        result = true;
        return;
      }
      if (node.val > val) {
        if (node.left === null) {
          result = false;
          return;
        } else {
          search(node.left);
        }
      } else if (node.val < val) {
        if (node.right === null) {
          result = false;
          return;
        } else {
          search(node.right);
        }
      }
    }
    search(this.root);

    return result;
  }
}


let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(13);
tree.insert(11);
tree.insert(16);

console.log(tree.find(2)); //true
console.log(tree.find(7)); //false
console.log(tree.find(100)); //false
console.log(tree.find(5)); //true