import { BinaryTree } from './binary_tree';
import exp = require('constants');

describe('Binary Tree', () => {
  let tree: BinaryTree<number>;

  beforeEach(() => {
    tree = new BinaryTree<number>();
  });

  afterEach(() => {
    tree = null;
  });

  test('insert value to empty tree', () => {
    tree.insert(0);
    expect(tree).toEqual({
      root: {
        value: 0,
        right: null,
        left: null,
      },
    });
  });

  test('insert duplicate value => error', () => {
    tree.insert(5);
    tree.insert(10);
    tree.insert(8);
    function insertDuplicate() {
      tree.insert(10);
    }
    expect(insertDuplicate).toThrow('duplicate value');
  });

  test('insert multiple nodes', () => {
    tree.insert(0);
    tree.insert(1);
    tree.insert(2);

    expect(tree).toEqual({
      root: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: {
            value: 2,
            right: null,
            left: null,
          },
        },
      },
    });
  });

  test('lookup in binary tree', () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(20);
    tree.insert(4);

    expect(tree).toEqual({
      root: {
        value: 10,
        left: {
          value: 5,
          right: null,
          left: { value: 4, right: null, left: null },
        },
        right: {
          value: 20,
          right: null,
          left: null,
        },
      },
    });

    expect(tree.lookup(5)).toEqual({
      value: 5,
      right: null,
      left: { value: 4, right: null, left: null },
    });

    expect(tree.lookup(4)).toEqual({
      value: 4,
      right: null,
      left: null,
    });

    expect(tree.lookup(100)).toBeNull();
  });
});
