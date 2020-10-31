var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if the item does not exist in the storage object and the item is a string
  if (!this._storage[item] && typeof item === 'string') {
    // add the item to the storage object
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return this._storage[item] === item;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
  add: constant time
  contains: constant time
  remove: constant time
 */
