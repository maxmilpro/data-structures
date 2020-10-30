

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // If the node doesn't exist
  if (!this[node]) {
    // add the node the graph
    this[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // if the node does exist
  if (this[node]) {
    // return true
    return true;
  }
  // return false
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // delete the property where key is equal to the input node
  delete this[node];
  // iterate over the properties (Graph)
  for (let key in this) {
    // iterate over the array of each property
    for (let i = 0; i < this[key].length; i++) {
      // if the current element of the array is equal to the node
      if (this[key][i] === node) {
      // remove the current element
        this[key].splice(i, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if the fromNode array contains the toNode
  // check if the array of the toNode contains the fromNode
  return this[fromNode].indexOf(toNode) >= 0 && this[toNode].indexOf(fromNode) >= 0;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // access the array of the fromNode & add toNode to the array
  this[fromNode].push(toNode);
  // access the array of the toNode & add fromNode to the array
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // iterate over the fromNode array
  for (let i = 0; i < this[fromNode].length; i++) {
    // if the current element is equal to toNode
    if (this[fromNode][i] === toNode) {
      //remove the current element
      this[fromNode].splice(i, 1);
    }
  }
  // iterate over the toNode array
  for (let j = 0; j < this[toNode].length; j++) {
    // if the current element is equal to fromNode
    if (this[toNode][j] === fromNode) {
      //remove the current element
      this[toNode].splice(j, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate over the graph
  for (let key in this) {
    // debugger;
    // create a variable that stores the parsed key
    const parsedKey = parseInt(key);
    // if the type of key is a number
    if (typeof parsedKey === 'number' && !isNaN(parsedKey)) {
      // invoke the callback on each node
      cb(parsedKey);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  "addNode": constant time
  "contains": constant time
  "removeNode": quadratic time
  "addEdge": constant time
  "hasEdge": linear time
  "removeEdge": quadratic time
  "forEachNode": linear time
 */


