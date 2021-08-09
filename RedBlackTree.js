import { Node } from './BinarySearchTree.js'
import { AVLTree } from './AVLTree.js'

const Colors = {
  RED: 'red',
  BLACK: 'black'
}

// 最新插入的节点总是红色的
export class RedBlackNode extends Node {
  constructor(key) {
    super();
    this.key = key;
    this.color = Colors.RED;
    this.parent = null;
  }
  isRed() {
    return this.color === Colors.RED
  }
}

export class RedBlackTree extends AVLTree {
  constructor() {
    super();
    this.root = null;
  }
  insert(key) {
    if(this.root == null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    }else {
      const newNode = this.insertNode(this.root, key)
    }
  }
  // 执行这个方法时this.root != null
  insertNode(node, key) {
    if(key < node.key) {
      if(node.left == null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      }else {
        return this.insertNode(node.left, key);
      }
    }else if(node.right == null) {
      node.right = new RedBlackNode(key)
      node.right.parent = node;
      return node.right;
    }else {
     return this.insertNode(node.right, key)
    }
  }

  fixTreeProperties(node) {
    while(node && node.parent && node.parent.color.isRed() && node.color != Colors.BLACK) {
      let parent = node.parent;
      const grandParent = parent.parent;
    }
  }
}