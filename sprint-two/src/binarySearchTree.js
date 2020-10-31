var BinarySearchTree = function(value) {
  // value prop is equal to value
  this.value = value;
  // left prop is equal to null
  this.left = null;
  // right prop is equal to null
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val) {
  // create a new binarytree with the input value
  let newBST = new BinarySearchTree(val);
  // if the input value is less than the root value
  if (val < this.value) {
    // if the left value of the root node is null
    if (this.left === null) {
      // add the new binarytree as the left value
      this.left = newBST;
      //otherwise
    } else {
      // invoke the insert method on the left value
      this.left.insert(val);
    }
    // otherwise
  } else {
    // if the right value of the root node is null
    if (this.right === null) {
      // add the input value as the right value
      this.right = newBST;
    //otherwise
    } else {
      // invoke the insert method on the right value
      this.right.insert(val);
    }
  }
};

BinarySearchTree.prototype.contains = function(val) {
  // if the input value is equal to the root node value
  if (val === this.value) {
    // return true
    return true;
  }
  // if (this.left === null && this.right === null) {
  //   return false;
  // }
  // if the input value is less than the root node value
  if (val < this.value) {
    if (this.left === null) {
      return false;
    }
    // if the left value is contained
    if (this.left.contains(val)) {
      return true;
    }
  }
  // if the input value is greater than the root node value
  if (val > this.value) {
    if (this.right === null) {
      return false;
    }
    if (this.right.contains(val)) {
      return true;
    }
  }
  // return false
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
