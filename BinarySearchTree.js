export class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if(this.root == null) {
      this.root = new Node(key)
    }else {
      this.insertNode(this.root, key)
    }
  }

  insertNode(node, key) {
    if (key < node.key) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  min() {
    return this.minNode(this.root)
  }

  minNode(node) {
    let current = node;
    if (current.left != null && current != null) {
      current = current.left;
    }
    return current;
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    let current = node;
    if (current != null && current.right != null) {
      current = current.right
    }
    return current;
  }

  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node == null) {
      return false;
    }
    if (key < node.key) {
      return this.searchNode(node.left, key)
    } else if (key > node.key) {
      return this.searchNode(node.right, key)
    } else {
      return true;
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  removeNode(node, key) {
    if (node == null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.removeNode(node.left, key)
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key)
    } else {
      // 键等于node.key
      // 第一种情况，移除的节点是叶节点。没有左节点也没有右节点
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }
      // 第二种情况，有一个左侧或是右侧的节点
      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }

      // 第三种情况，节点有左右子树，获取右子树中的最小值替换节点值，然后进入右子树删除最小值对应的节点
      const minkey = this.minNode(node.right);
      node.key = minkey;
      this.removeNode(node.right, minkey)
      return node;
    }
  }
}