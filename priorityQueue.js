class Node {
  constructor(val, priority) {
    this.val = val,
    this.priority = priority
  }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);

    this.values.push(newNode);

    let childId = this.length - 1;
    let parentId = Math.floor((childId - 1) / 2);

    while (parentId <= 0) {
      if (this.values[childId] < this.values[parentId]) {
        let temp = this.values[childId];
        this.values[childId] = this.values[parentId];
        this.values[parentId] = temp;
      } else {
        break;
      }
    }
    return this.values;
  }

  dequeue() {
    const min = this.values.shift();
    let max = this.values.pop();

    this.values.unshift(max);

    let parentId = 0;

    while (parentId < this.values.length) {
      console.log('parentId', parentId)
      let childLeft = (2 * parentId) + 1;
      let childRight = (2 * parentId) + 2;

      let minChild = Math.min(this.values[childLeft].priority, this.values[childRight].priority);
      console.log('minChild', this.values[minChild])
      console.log('vals', this.values);

      if (this.values[minChild] < this.values[parentId].priority) {
        let temp = this.values[minChild];
        this.values[minChild] = this.values[parentId];
        this.values[parentId] = temp;

        parentId = minChild;
      } else {
        break;
      }
    }

    return min;
  }
}

let MBH = new MinBinaryHeap();
MBH.enqueue('hi', 2);
MBH.enqueue('hello', 3);
MBH.enqueue('heyyy', 10);
MBH.enqueue('heyyy', 14);

console.log(MBH.dequeue());