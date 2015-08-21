var BinarySearchTree = function(value){
  var tree = Object.create(methods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var methods = {};

methods.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

methods.contains = function(value) {
  if (value === this.value) {
    return true;
  } 
  else if (value < this.value) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(value);
  }
  else if (value > this.value) {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(value);
  } 

};

methods.depthFirstLog = function(cb) {
  var results = [];
  var firstNode = this;
  var execute = function(node) {
    results.push(cb(node.value));
    if (node.left !== null) {
      execute(node.left);
    }
    if (node.right !== null) {
      execute(node.right);
    }
  };
  execute(firstNode);
  return results;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
