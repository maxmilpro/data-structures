var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length + 1] = value;
  };

  someInstance.dequeue = function() {
    var firstIn = storage[1];
    delete storage[1];
    for (var key in storage) {
      var currentValue = storage[key];
      delete storage[key];
      storage[key - 1] = currentValue;
    }
    return firstIn;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
