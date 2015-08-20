var Queue = function() {
  var someInstance = Object.create(Queue.queueMethods);
  someInstance.storage = {};

  return someInstance;
};

Queue.queueMethods = {
  enqueue: function(value){
    
  },
  dequeue: function(){

  },
  size: function(){
    var count = 0;
    for (var key in this.storage) {
      count++;
    }
    return count;
  }
};


