// Linked List

class INode<T> {
  value: T;
  next: null | INode<T>;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: INode<T>;
  tail: INode<T>;
  length: number = 0;
  
  
  constructor(value: T) {
    const node = new INode<T>(value)
    this.head = node;
    this.length = 1;
    this.tail = node
  }
  
  append(value: T) {
    const newNode = new INode<T>(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  
  prepend(value: T) {
    const newNode = new INode<T>(value)
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  
  insert(index: number, value: T) {
    let current = 0;
    let node: null | INode<T> = this.head;
    while (current < index - 1 && node.next !== null) {
      node = node.next;
      current++
    }
    const newNode = new INode<T>(value);
    newNode.next = node.next;
    node.next = newNode;
  }
}

const myNumLinkedList = new LinkedList<number>(5)

myNumLinkedList.append(20)
myNumLinkedList.prepend(0)
myNumLinkedList.insert(2, 10)

console.log(JSON.stringify(myNumLinkedList));
