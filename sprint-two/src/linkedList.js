var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  /*
    Input: Unknown data type representing value (string, num, obj)
    Output: No return, only side effect of updating tail of linked list
    Constraints: None
    Edge Cases:
      -An empty linked list
      -No values are arguments are provided when creating the linked list
    Example:
    Strategy:
     -Create the new node.
     -If a head does not exist, then we point the head to the new node.
     -If a tail does not exist, we update the tail property.
     -If the head does exist, we do nothing to the head.
     -If the tail doesn't exist, point the tail to the new node.
     -If the tail does exist, point the existing node to the new node.
  */

  list.addToTail = function(value) {
    const newNode = Node(value);
    // If the head and tail are null
    if (!list.head || !list.tail) {
      // set the head and tail equal to the value
      list.head = newNode;
      list.tail = newNode;
    // otherwise
    } else {
      // set the next value of the tail equal to the input value
      list.tail.next = newNode;
      // update the tail to equal the input value
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // declare a variable that stores the current heads value
    const curHead = list.head;
    // if the head is equal to null
    if (curHead === null) {
      // return removed node
      return curHead;
      // otherwise if the head and tail are equal to each other
    } else if (curHead === list.tail) {
      // set both head and tail to null
      list.head = null;
      list.tail = null;
    // otherwise
    } else {
      // point the head to the current heads next value
      list.head = curHead.next;
    }
    // return value of removed node
    return curHead.value;
  };

  list.contains = function(target) {
    // If the head is equal to the target
    if (list.head.value === target) {
      // return true
      return true;
    }
    // declare a variable that stores the next value
    let nextVal = list.head.next;
    // while the next value isnt null
    while (nextVal) {
      // if the target value is equal to the next value
      if (nextVal.value === target) {
        // return true
        return true;
      // otherwise
      } else {
      // update the variable to the next value
        nextVal = nextVal.next;
      }
    }
    //return false
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// testing our remote setup

/*
 * Complexity: What is the time complexity of the above functions?
 */





