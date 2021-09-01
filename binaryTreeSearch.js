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

  //time complexity O(log n)
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

  //time complexity O(log n)
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

  BFS() {
    let queue = [];
    let result = [];

    queue.push(this.root);

    while (queue.length) {
      let firstIn = queue.shift();

      result.push(firstIn.val);

      if (firstIn.left !== null) {
        queue.push(firstIn.left);
      }

      if (firstIn.right !== null) {
        queue.push(firstIn.right);
      }
    }
    return result;
  }

  //DFS Pre-order

  DFSPre () {
    let result = [];

    result.push(this.root.val)

    const search = (node) => {

      if (node.left) {
        result.push(node.left.val);
        search(node.left);
      }

      if (node.right) {
        result.push(node.right.val);
        search(node.right);
      }
    }

    search(this.root);

    return result;
  }

  //DFS Post-order
  DFSPost () {
    let result = [];

    const search = (node) => {

      if (node.left) {
        search(node.left);
        result.push(node.left.val);
      }

      if (node.right) {
        search(node.right);
        result.push(node.right.val);
      }
    }

    search(this.root);

    result.push(this.root.val)

    return result;
  }
}


let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(13);
tree.insert(16);

console.log(tree.find(2)); //true
console.log(tree.find(7)); //false
console.log(tree.find(100)); //false
console.log(tree.find(5)); //true

console.log(tree.DFSPost());

//2, 5, 16, 13, 10