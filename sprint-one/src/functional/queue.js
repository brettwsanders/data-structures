var Queue = function(){
  var someInstance = {};
  var storage = {};

  someInstance.enqueue = function(value){
    var length = someInstance.size();
    storage[length] = value;
    return length+1;
  };

  someInstance.dequeue = function(){
    var result = storage[0];
    delete storage[0];
    for(var key in storage) {
      storage[key-1] = storage[key]
    }
    delete storage[someInstance.size() - 1];
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
