var Queue = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count]=value;
    count++;
  };

  someInstance.dequeue = function() {
    if (Object.keys(storage).length === 0){
      return 0;
    }
    
    var firstElement = Math.min(...Object.keys(storage));
    var el = storage[firstElement];

    delete storage[firstElement];

    return el;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

