//Circular Linked List: is a linked list in which the head element's previous pointer points to the tail element and the tail element's next pointer points to the head element. A circularly linked list node looks exactly the same as a linear singly linked list.
//reference: https://github.com/hughsk/circular-list/blob/master/index.js

function CircularLinkedList(element) {
  var Node = (element)=>{
    this.element = element
    this.prev = null
    this.next = null
  }

  var length = 0
  var head = null
  var tail = null

  this.append = (element)=>{
    //case1: the linkedlist is empty
    if(head === null) {
      head = element.prev = element
      tail = element.next = element
    //case2
    } else {
      element.prev = tail
      element.next = head
      this.head.prev = element
      this.tail.next = element
    }
    length++
  }

  this.insert = (element, inserted)=>{
    inserted.prev = element
    inserted.next = element.next
    element.next.prev = inserted
    element.prev = inserted
    if(inserted.prev === tail) {
      tail = inserted
    }
    length++
  }

  this.remove = (element)=>{
    if(length > 1) {
      element.prev.next = element.next
      element.next.prev = element.prev
      if(element === head) {
        head = element.next
      }
      if(element === tail) {
        tail = element.prev
      }
    } else if(head === element){
      head = null
      tail = null
    }
    element.prev = null
    element.next = null
    length--
  }

  this.each = (cb)=>{
    var p = head
    var n = length
    while(n--) {
      cb(p.element)
      p = p.next
    }
  }
}
