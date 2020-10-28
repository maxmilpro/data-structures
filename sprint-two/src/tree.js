var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  //fix me --- if we run into errors with addChild or contains, double check this
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new tree and set the value to the input value
  var branch = Tree(value);
  // add the new tree as a child of the original tree
  this.children.push(branch);
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
