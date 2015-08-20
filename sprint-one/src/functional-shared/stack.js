var Stack = function() {
  var someInstance = { storage: {} };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value){
    var length = this.size();
    this.storage[length] = value;
    return length + 1;
  },
  pop: function(){
    var length = this.size();
    var result = this.storage[length-1];
    delete this.storage[length-1];
    return result;
  },
  size: function(){
    var count = 0;
    for (var key in this.storage) {
      count++;
    }
    return count;
  }
};


