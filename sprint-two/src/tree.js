var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = null;  // fix me

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  if (this.children === null){
    this.children = [];
  }
  var addedTree = Tree(value);
  this.children.push(addedTree);
};

treeMethods.contains = function(target){
  var firstNode = this;
  var result = false;
  var target = target;
  var checkTarget = function(node) {
    if (node.value === target) {
      result = true;
      return;
    } 
    if (node.children !== null) {
      for(var i = 0, len = node.children.length; i < len; i++) {
        checkTarget(node.children[i]);
      }
    }
  };
  checkTarget(firstNode);
  
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
