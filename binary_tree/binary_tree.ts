class BinaryTreeNode<T> {
  value: T;
  right: null | BinaryTreeNode<T>;
  left: null | BinaryTreeNode<T>;

  constructor(value: T, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

export class BinaryTree<T> {
  root: null | BinaryTreeNode<T>;

  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const node = new BinaryTreeNode<T>(value);
    if (!this.root) {
      return (this.root = node);
    }
    let pointer: null | BinaryTreeNode<T> = this.root;
    while (true) {
      if (pointer.value === value) {
        throw new Error('duplicate value');
      }
      if (pointer.value < value) {
        if (pointer.right) pointer = pointer.right;
        else return (pointer.right = new BinaryTreeNode<T>(value));
      } else {
        if (pointer.left) pointer = pointer.left;
        else return (pointer.left = new BinaryTreeNode<T>(value));
      }
    }
  }

  lookup(value: T) {
    let pointer = this.root;
    while (pointer) {
      if (pointer?.value === value) return pointer;
      pointer = pointer?.value < value ? pointer.right : pointer.left;
    }
    return pointer;
  }
}
