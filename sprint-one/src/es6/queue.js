class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.size() + 1] = value;
  }

  dequeue() {
    var firstItem = this.storage[1];
    delete this.storage[1];
    for (var key in this.storage) {
      var currentValue = this.storage[key];
      delete this.storage[key];
      this.storage[key - 1] = currentValue;
    }
    return firstItem;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
