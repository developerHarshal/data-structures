import { Queue } from "./queue.class.js";

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.print();

queue.dequeue();
queue.dequeue();
queue.print();

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();

queue.enqueue(40);
queue.print();

