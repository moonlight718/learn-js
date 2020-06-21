class CQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  appendTail(val) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  
    this.stack1.push(val);
  
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop());
    }
    return null;
  }
  deleteHead() {
    if (this.stack1.length) {
      return this.stack1.pop();
    }
    return -1;
  }
}

const obj = new CQueue();
console.log(obj.appendTail(1));
console.log(obj.appendTail(2));
console.log(obj.deleteHead());
console.log(obj.deleteHead());
console.log(obj.deleteHead());