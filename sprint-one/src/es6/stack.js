class Stack {
  constructor() {
    this.count= 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  
  pop() {
    if (this.count > 0){
      this.count--;
      var lastElement = this.storage[this.count];
      delete this.storage[this.count];
      return lastElement;
    }
  }
  
  size() {
    return this.count;
  }
}