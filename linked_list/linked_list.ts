// Linked List

class INode<T> {
  value: T;
  next: null | INode<T>;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: INode<T>;
  private tail: INode<T>;
  length: number = 0;

  constructor(value: T) {
    const node = new INode<T>(value);
    this.head = node;
    this.length = 1;
    this.tail = node;
  }

  append(value: T) {
    const newNode = new INode<T>(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value: T) {
    const newNode = new INode<T>(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index: number, value: T) {
    if (index <= 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new INode<T>(value);
    let node: INode<T> = this.traverseToIndex(index - 1);
    newNode.next = node.next;
    node.next = newNode;
    this.length++;
  }

  remove(index: number) {
    if (index <= 0) {
      this.head = this.head.next;
    } else if (index >= this.length - 1) {
      const last = this.traverseToIndex(this.length - 2);
      last.next = null;
      this.tail = last;
    } else {
      const prevNode = this.traverseToIndex(index - 1);
      const unwantedNode = prevNode.next;
      prevNode.next = unwantedNode.next;
    }
    this.length--;
  }

  private traverseToIndex(index: number) {
    let current = 0;
    let node: INode<T> = this.head;
    while (current < index) {
      node = node.next;
      current++;
    }
    return node;
  }
}
