class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp(this.values);
    return this.values;
  }

  bubbleUp(arr) {
    //take last index
    let currId = arr.length - 1;

    //find parent
    let parentId = Math.floor((currId - 1)/2);

    while (parentId >= 0) {
      //compare the values
      if (arr[currId] > arr[parentId]) {
        //if the end if larger, swap values
        let temp = arr[currId];
        arr[currId] = arr[parentId];
        arr[parentId] = temp;

        currId = parentId;
        parentId = Math.floor((currId - 1)/2);
      } else {
         //otherwise stop
        return;
      }
    }
  }

  extractMax() {
    const max = this.values.shift();
    const last = this.values.pop();

    this.values.unshift(last);

    let parentId = 0;

    while(parentId < this.values.length) {
      let childLeft = 2 * parentId + 1;
      let childRight = 2 * parentId + 2;

      const childMax = Math.max(this.values[childLeft], this.values[childRight]);

      if (this.values[parentId] < childMax) {
        let childId = this.values.indexOf(childMax);
        this.values[childId] =  this.values[parentId];
        this.values[parentId] = childMax;
        parentId = childId;
      } else {
        break;
      }
    }

    console.log('arr', this.values);
    return max;
  }
}

let MBH = new MaxBinaryHeap();
// console.log(MBH.insert(55));
// console.log(MBH.insert(1));
// console.log(MBH.insert(45));
// console.log(MBH.insert(100));

console.log(MBH.extractMax());