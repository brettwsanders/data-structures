var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    list[value] = node;
    if (list.head === null && list.tail === null) {
      list.head = list[value];
      list.tail = list[value];
    } else {
      list.tail.next = list[value];
      list.tail = list[value];
    }

  };

  list.removeHead = function(){

    var next = list.head.next;
    var removed = list.head;
    delete list[list.head.value];
    list.head = next;
    return removed.value;
  };

  list.contains = function(target){
    for (var key in list) {
      if(key === target.toString())
        return true;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
