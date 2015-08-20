var Queue = function(){
  var someInstance = { storage: {} };
  _.extend(someInstance, queueMethods);
  return someInstance; 
};

var queueMethods = {

  enqueue: function(value){
    var length = this.size();
    this.storage[length] = value;
    return length + 1;
  },
  dequeue: function(){
    var result = this.storage[0];
    var length = this.size();
    delete this.storage[0];
    for(var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage[length -1];
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


