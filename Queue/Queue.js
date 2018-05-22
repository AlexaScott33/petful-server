'use strict';

class _Node {
  constructor(value) {
    this.value=value;
    this.next=null;
    this.prev=null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if(this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

///////// HELPER FUNCTIONS //////////

function peek(queue) {
  if (queue.first === null) {
    return 'The queue is empty';
  }

  return queue.first.value;
}

function display(queue) {
  if(queue.first === null) {
    return 'The queue is empty';
  }

  let current = queue.first;

  while(current) {
    console.log(current.value);
    current = current.prev;
  }
  return;
}

module.exports = { Queue, peek };