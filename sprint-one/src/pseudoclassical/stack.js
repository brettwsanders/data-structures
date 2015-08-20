var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value){
  var length = this.size();
  this.storage[length] = value;
  return length+1;
};

Stack.prototype.pop = function(){
  var length = this.size();
  var result = this.storage[length-1];
  delete this.storage[length-1];
  return result;
};

Stack.prototype.size = function(){
  var count = 0;
  for (var key in this.storage){
    count++;
  }
  return count;
};


