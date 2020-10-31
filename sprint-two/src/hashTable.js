

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // generate an index
  var index = getIndexBelowMaxForKey(k, this._limit);
  // invoke set method with index and v
  this._storage.set(index, k, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // invoke get method with index
  return this._storage.get(index, k);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, i, arr) {
    // // if the current index is equal hashed index
    // if (index === i) {
    //   // remove the element at the current index
    //   arr.splice(index, 1);
    // }
    // iterate over the bucket
    for (let i = 0; i < value.length; i++) {
      // if the first item of the tuple is equal to the key
      if (value[i][0] === k) {
        // remove the tuple from the bucket
        value.splice(i, 1);
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


