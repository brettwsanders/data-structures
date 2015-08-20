var Queue = function() {
  this.storage = {};
  // this.prototype.constructor = Queue.constructor;
};

Queue.prototype.enqueue = function(value) {
    var length = this.size();
    this.storage[length] = value;
    return length+1;
};

Queue.prototype.dequeue = function() {
    var length = this.size();
    var result = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key-1] = this.storage[key];
    }
    delete this.storage[length-1];
    return result;
};

Queue.prototype.size = function() {
    var count = 0;
    for (var key in this.storage) {
      count++;
    }
    return count;
};