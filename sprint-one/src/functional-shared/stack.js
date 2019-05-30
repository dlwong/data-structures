var Stack = function() {
  var instance = {};
  instance.count = 0;
  //instance.pop = stackMethods.pop;
  //instance.push = stackMethods.push();
  instance.storage = {};

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function(){
    if (this.count > 0){
      this.count--;
      var lastElement = this.storage[this.count];
      delete this.storage[this.count];
      return lastElement;
    }
  },
  size: function(){
    return this.count;
  }
};

