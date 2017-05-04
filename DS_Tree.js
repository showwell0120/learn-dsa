//Tree: is a data structure made up of nodes or vertices and edges without having any cycle. The tree with no nodes is called the null or empty tree. A tree that is not empty consists of a root node and potentially many levels of additional nodes that form a hierarchy.

//A Binary Search Tree (BST) is a tree in which all the nodes follow the below-mentioned properties −
//The left sub-tree of a node has a key less than or equal to its parent node's key.
//The right sub-tree of a node has a key greater than to its parent node's key.

'use strict'

function BinarySearchTree() {
  //create Node class, key is to store the data, and left and right are pointers to point to child nodes
  const Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  let root = null

  //Insert non-root node, detect the position to be inserted
  const insertNode = function(node, newNode) {
    //If the key of new node is less than root node, then move to the left side of the root node
    if(newNode.key < node.key) {
      if(node.left === null) {
        node.left = newNode
      } else {
        //When full, recursive again
        insertNode(node.left, newNode)
      }
    //If the key of new node is greater than root node, then move to the right side of the root node
    } else {
      if(node.right === null) {
        node.right = newNode
      } else {
        //When full, recursive again
        insertNode(node.right, newNode)
      }
    }
  }

  //Insert a "key" in the tree
  this.insert = function(key) {
    let newNode = new Node(key)
    if(root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  const searchNode = function(node, key) {
    if(node === null) {
      return false
    }
    if(key < node.key) {
      return searchNode(node.left, key)
    } else if(key > node.key) {
      return searchNode(node.right, key)
    } else {
      return true
    }
  }

  //Check if the "key" is exists
  this.search = function(key) {
    return searchNode(root, key)
  }

  const inOrderTraverseNode = function(node, callback) {
    if(node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  //Traverse the tree by in-order(ascending order, visit the nodes from the smallest to the largest)
  this.inOrderTraverse = function(callback) {
    //start from root
    inOrderTraverseNode(root, callback)
  }

  const preOrderTraverseNode = function(node,callback) {
    if(node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  //Traverse the tree by pre-order(visits the node prior to its descendants)
  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback)
  }

  const postOrderTraverseNode = function(node, callback) {
    if(node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  //Traverse the tree by post-order(visits the node after it visits its descendants)
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback)
  }

  const minNode = function(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }

  //Return the minimum of the tree
  this.min = function() {
    return minNode(root)
  }

  const maxNode = function(node) {
    if(node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }

  //Return the maximum of the tree
  this.max = function() {
    return maxNode(root)
  }
}

//demo1
let tree = new BinarySearchTree()
tree.insert(7)
//root:7B
tree.insert(2)
//root:7
//l:2  r:null
tree.insert(4)
//root:7
//l:2         r:null
//l:null  r:4
tree.insert(5)
//root:7
//l:2         r:null
//l:null  r:4
//        l:null  r:5
tree.insert(12)
//root:7
//l:2         r:12
//l:null  r:4
//        l:null  r:5
tree.insert(1)
//root:7
//l:2         r:12
//l:1  r:4
//     l:null  r:5
tree.insert(97)
//root:7
//l:2         r:12
//l:1  r:4    l:null  r:97
//     l:null  r:5

//demo2
function printNode(value) {
  console.log(value)
}

console.log("inOrderTraverse:")
tree.inOrderTraverse(printNode)  //1 2 4 5 7 12 97
console.log("preOrderTraverse:")
tree.preOrderTraverse(printNode)  // 7 2 1 4 5 12 97
console.log("postOrderTraverse:")
tree.postOrderTraverse(printNode)  //1 5 4 2 97 12 7
console.log("max:" + tree.max())  //97
console.log("min:" + tree.min())  //1
console.log("search:" + tree.search(4))
console.log("search:" + tree.search(99))
