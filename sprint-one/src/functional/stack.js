var Stack = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    count--;
    var a = storage[count];
    delete storage[count];
    return a;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

var s = new Stack();