var Queue = function() {
  this.count= 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function(){
  if(this.count>0){
    firstElement = Math.min(...Object.keys(this.storage));
    var el = this.storage[firstElement];
    delete this.storage[firstElement];
    return el;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
