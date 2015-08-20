var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    var length = this.size();
    this.storage[length] = value;
    return length+1;
  },
  dequeue: function(){
    var length = this.size();
    var result = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key-1] = this.storage[key];
    }
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


