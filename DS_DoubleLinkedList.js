//Double Linked List: is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes.

function DoublyLinkedList() {
  var Node = (element)=>{
    this.element = element
    this.next = null
    //to access the previous element
    this.prev = null
  }
  var length = 0
  var head = null
  //create the pointer to access elements from the back of the linkedlist
  var tail = null

  this.insert = (position, element)=>{
    if(position > -1 && position < length) {
      const node = new Node(element)
      let current = head
      let previous
      let index = 0
      //case1: insert the node at the head
      if(position === 0) {
        // check if the linkedlist is empty or not
        if(!head) {
          //if there is empty, the pointers-"head" and "tail" point to the node
          head = node
          tail = node
        } else {
          node.next = current
          current.prev = node
          head = node
        }
      //case2: insert the node at the tail
      } else if(position === length) {
        current = tail
        current.next = node
        node.prev = current
        tail = node
      //case3: insert the node within the linkedlist
      } else {
        // use while loop to let "current" to point to the target
        while(index++ < position) {
          previous = current
          current = current.next
        }
        //notice that it has to follow the steps so that the linkedlist wouldn't been broken off
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      length++
      return true
    } else {
      return false
    }
  }

  this.removeAt = (position)=>{
    if(posiotion > -1 && position < length) {
      let current = head
      let previous
      let index = 0
      //case1: remove the first element
      if(position === 0) {
        head = current.next
        if(length === 1) {
          tail = null
        } else {
          head.prev = null
        }
      //case2: remove the last element
      } else if(position === length - 1) {
        current = tail
        tail = current.prev
        tail.ndex = null
      //case3: remove the node within the linkedlist
      } else {
        while(index++ < position) {
          previous = current
          current = current.next
        }
        //let "previous" to skip the target
        previous.next = current.next
        current.next.prev = previous
      }
      length--
      return current.element
    } else {
      return null
    }
  }
}
