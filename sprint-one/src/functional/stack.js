var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[Object.keys(storage).length + 1] = value;
  };

  someInstance.pop = function() {
    var topItem = storage[Object.keys(storage).length];
    delete storage[Object.keys(storage).length];
    return topItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};


