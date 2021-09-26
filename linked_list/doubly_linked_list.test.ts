import { DoublyLinkedList } from './double_linked_list';

test('Doubly Linked List =>>', () => {
  const myDoublyLinkedList = new DoublyLinkedList<number>(0);

  expect(myDoublyLinkedList).toEqual({
    length: 1,
    head: { value: 0, prev: null, next: null },
    tail: { value: 0, prev: null, next: null },
  });
});
