export class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  peek() {
    console.log(this.items[this.front]);
  }

  print(){
    console.log(Object.values(this.items).toString());
  }
}