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
}

let MBH = new MaxBinaryHeap();
console.log(MBH.insert(55));