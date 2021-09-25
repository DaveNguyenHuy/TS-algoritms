import {LinkedList} from "./index";
import exp = require("constants");

test('Linked List =>', () => {
  const myLinkedList = new LinkedList<number>(1);
  expect(myLinkedList).toEqual({
    head: {
      value: 1, next: null
    },
    tail: {
      value: 1, next: null
    },
    length: 1
  })
  
  myLinkedList.append(3); // 1 -> 3
  expect(myLinkedList).toEqual({
    head: {
      value: 1, next: {value: 3, next: null}
    },
    tail: {
      value: 3, next: null
    },
    length: 2
  })
  
  myLinkedList.prepend(0); // 0 -> 1 -> 3
  expect(myLinkedList).toEqual({
    head: {
      value: 0, next: {value: 1, next: {value: 3, next: null}}
    },
    tail: {
      value: 3, next: null
    },
    length: 3,
  })
  
  myLinkedList.insert(2, 2) // 0 -> 1 -> 2 -> 3
  expect(myLinkedList).toEqual({
    head: {
      value: 0, next: {value: 1, next: {value: 2, next: { value: 3, next: null }}}
    },
    tail: {
      value: 3, next: null
    },
    length: 4,
  })
  
  myLinkedList.insert(4, 4) // 0 -> 1 -> 2 -> 3 -> 4
  expect(myLinkedList).toEqual({
    head: {
      value: 0, next: { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: null }}}}
    },
    tail: {
      value: 4, next: null
    },
    length: 5,
  })
  
  myLinkedList.insert(10, 5) // 0 -> 1 -> 2 -> 3 -> 4 -> 5
  expect(myLinkedList).toEqual({
    head: {
      value: 0, next: { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: null }}}}}
    },
    tail: {
      value: 5, next: null
    },
    length: 6,
  })
  
  myLinkedList.remove(0) // 1 -> 2 -> 3 -> 4 -> 5
  expect(myLinkedList).toEqual({
    head: {
      value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: null }}}}
    },
    tail: {
      value: 5, next: null
    },
    length: 5,
  })
  
  myLinkedList.remove(5) // 1 -> 2 -> 3 -> 4
  expect(myLinkedList).toEqual({
    head: {
      value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: null}}}
    },
    tail: {
      value: 4, next: null
    },
    length: 4,
  })
  
  myLinkedList.remove(2) // 1 -> 2 -> 4
  expect(myLinkedList).toEqual({
    head: {
      value: 1, next: { value: 2, next: { value: 4, next: null}}
    },
    tail: {
      value: 4, next: null
    },
    length: 3,
  })
  
  myLinkedList.remove(2) // 1 -> 2
  expect(myLinkedList).toEqual({
    head: {
      value: 1, next: { value: 2, next: null }
    },
    tail: {
      value: 2, next: null
    },
    length: 2,
  })
  
  myLinkedList.remove(1) // 1
  expect(myLinkedList).toEqual({
    head: {
      value: 1, next: null
    },
    tail: {
      value: 1, next: null
    },
    length: 1,
  })
})
