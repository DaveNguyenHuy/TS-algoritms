// Doubly linked list

class INode<T> {
  value: T;
  next: null | INode<T>;
  prev: null | INode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  head: INode<T>;
  tail: INode<T>;
  length: number;

  constructor(value: T) {
    const node = new INode(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  append(value: T) {
    const node = new INode(value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }
}
