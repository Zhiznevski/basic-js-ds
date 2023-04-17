const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this;
  }
  enqueue(value) {
    const tail = this.tail;
    const element = { next: null, value };
    if (tail) {
      tail.next = element;
      this.tail = element;
    } else {
      this.head = element;
      this.tail = element;
    }
  }
  dequeue() {
    const element = this.head;
    if (!element) {
      return null;
    }
    if (this.tail === element) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = element.next;
    }
    return element.value;
  }
}

module.exports = {
  Queue,
};
