class Queue {
  constructor() {
    this.count= 0;
    this.storage = {};
  }

  enqueue(value){
    this.storage[this.count] = value;
    this.count++;
  }
  
  dequeue(){
    if(this.count>0){
      var firstElement = Math.min(...Object.keys(this.storage));
      var el = this.storage[firstElement];
      delete this.storage[firstElement];
      return el;
    }
  }
  
  size() {
    return Object.keys(this.storage).length;
  }

}
