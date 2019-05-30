var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.count= 0;
  instance.storage = {};

  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function(){
    if(this.count>0){
      firstElement = Math.min(...Object.keys(this.storage));
      var el = this.storage[firstElement];
      delete this.storage[firstElement];
      return el;
    }
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};

