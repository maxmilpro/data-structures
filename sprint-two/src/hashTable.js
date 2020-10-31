

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
    if (i === index) {
    // iterate over the bucket
      for (let j = 0; j < value.length; j++) {
        // if the first item of the tuple is equal to the key
        if (value[j][0] === k) {
          // remove the tuple from the bucket
          value.splice(j, 1);
        }
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant time
 retrieve: constant time
 remove: constant time
 */


