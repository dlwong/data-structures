var Queue = function() {
  var someInstance = {};
  this.count = 0;
  // Use an object with numeric keys to store values
  this.storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[0]=value;
  };

  someInstance.dequeue = function() {
    var firstElement = storage[0];
    delete storage[0];
    return firstElement;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
