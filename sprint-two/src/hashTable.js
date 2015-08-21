var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(i);
  if (bucket === undefined || bucket === null) {
    bucket = [];
  } 
  for (var index = 0; index < bucket.length; index++){
    if (bucket[index][0] === k)
      bucket[index][1] = v;
  }
  bucket.push(tuple);
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var index = 0; index < bucket.length; index++) {
    if (bucket[index][0] === k) {
      return bucket[index][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var index = 0; index < bucket.length; index++) {
    if (bucket[index][0] === k) {
      bucket[index] = [k , null];
    }
  }
  this._storage.set(i, bucket);
};

HashTable.prototype.log = function() {
  this._storage.see();
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
