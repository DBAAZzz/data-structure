import {Node, BinarySearchTree} from './BinarySearchTree.js'

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
}

export class AVLTree extends BinarySearchTree {
  constructor() {
    super();
  }

  // 获取一个节点高度
  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }
    return Math.max(
      this.getNodeHeight(node.left), this.getNodeHeight(node.right)
    ) + 1
  }

  // 获取一个节点的平衡因子
  getBalanceFactor(node) {
    // 获取左右子树的差值，平衡树要求左右子树的高度差不能大于1
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      case 2:
        return BalanceFactor.UNBALANCED_LEFT
      default:
        return BalanceFactor.BALANCED
    }
  }

  // 平衡操作，在对AVL树添加或移除节点后，我们要计算阶段的高度并验证树是否需要进行平衡。分别对应4种场景
  // 1、这种情况出现在左侧子节点的高度大于右侧子节点的高度，并且左侧子节点也是平衡或左侧较重
  rotationLL(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp
  }

  // 2、这种情况出现在右侧子节点的高度大于左侧子节点的高度，并且右侧子节点也是平衡或右侧较重
  rotationRR(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }

  // 3、这种情况出现于左侧子节点的高度大于右侧子节点的高度，并且左侧子节点右侧较重
  rotationLR(node) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }

  // 4、这种情况出现于右侧子节点的高度大于右侧子节点的高度，并且右侧子节点左测较重
  rotationRL(node) {
    node.right = this.rotationLL(node.right)
    return this.rotationRR(node)
  }

  // 插入节点
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    // 像在BST树中一样插入节点
    if (node == null) {
      return new Node(key);
    } else if (node.key < key) {
      node.left = this.insertNode(node.left, key)
    } else if (node.key > key) {
      node.right = this.insertNode(node.right, key)
    } else {
      return node; // 重复的键
    }
    const balanceFactory = this.getBalanceFactor(node);
    if (balanceFactory == BalanceFactor.UNBALANCED_LEFT) {
      // 如果插入的节点值小于左侧子节点的键，则满足第一种情况
      if (key < node.left.key) {
        node = this.rotationLL(node)
      } else {
        node = this.rotationLR(node)
      }
    }
    if (balanceFactory == BalanceFactor.UNBALANCED_RIGHT) {
      if (key > node.right.key) {
        node = this.rotationRR(node)
      } else {
        node = this.rotationRL(node)
      }
    }
    return node;
  }

  remove(node, key) {
    node = super.removeNode(node, key);
    if (node == null) {
      return node;
    }
    const balanceFactory = this.getBalanceFactor(node);
    if (balanceFactory === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactoryLeft = this.getBalanceFactor(node.left);
      if (
        balanceFactoryLeft === BalanceFactor.BALANCED ||
        balanceFactoryLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationLL(node)
      }
      if (balanceFactoryLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left)
      }
    }
    if (balanceFactory === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactoryRight = this.getBalanceFactor(node.right);
      if (
        balanceFactoryRight === BalanceFactor.BALANCED ||
        balanceFactoryRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationRR(node)
      }
      if (balanceFactoryRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node.right)
      }
    }
    return node;

  }
}