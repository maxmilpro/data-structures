var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if the item does not exist in the storage array and the item is a string
  if (this._storage.indexOf(item) < 0 && typeof item === 'string') {
    // add the item to the storage array
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  // return if the index of the item in the storage array is greater than or equal to 0
  return this._storage.indexOf(item) >= 0;
};

setPrototype.remove = function(item) {
  // store the index of the input item
  const itemIndex = this._storage.indexOf(item);
  // remove the item from the storage array based on the index
  this._storage.splice(itemIndex, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
  add: linear time
  contains: linear time
  remove: linear time
 */
