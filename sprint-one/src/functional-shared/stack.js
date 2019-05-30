var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.count = 0;
  instance.pop = stackMethods.pop;
  instance.push = stackMethods.push();
  instance.size = Object.keys(instance).length;
  instance.storage = {};

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  pop: function(){
    if(this.size > 0){
      this.size--;
      var data = this.storage[this.size];
      delete this.storage[this.size];
      return data;
    }
  },
  push: function(value){
    this.storage[this.size] = data;
    this.size++;
  }
};


