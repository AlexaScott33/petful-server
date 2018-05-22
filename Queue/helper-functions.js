'use strict';



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

module.exports = peek;