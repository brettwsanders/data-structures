var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var length = someInstance.size();
    storage[length] = value;
    return length+1;
  };

  someInstance.pop = function(){
     var length = someInstance.size();
     var result = storage[length-1];
     delete storage[length-1];
     return result;
  };

  someInstance.size = function(){
    var size = 0;
    for (var key in storage) {
      size++;
    }
    return size;
  };

  return someInstance;
};

