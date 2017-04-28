function LinkedList() {
  //node instructor
  const Node = (element)=>{
    this.element = element
    this.next = null
  }

  //store the length of the linkedlist
  let length = 0

  //the pointer of the first node
  let head = null

  //insert an element to the last of the linkedlist
  this.append = (element)=>{
    const node = new Node(element)
    let current

    //case1: the linkedlist is empty, so let "head" point to the new node
    if(head == null) {
      head = node
    } else {
      //case2: use "current" to be the assistant pointer and let "head" to point to the "current". Then use while loop to find out the last node, and insert the new node to back of the last node.
      current = head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }

    //update the length of the linkedlist
    length++
  }

  //insert an element to the specific position of the linkedlist
  this.insert = (position, element)=>{
    if(position >= 0 && position <= length) {
      let node = new Node(element)
      let current = head
      let previous
      let index = 0
      if(position === 0) {
        node.next = current
        head = node
      } else {
        while(index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else {
      return false
    }
  }

  //remove an element from the linkedlist
  this.remove = (element)=>{}

  //remove the element from the linkedlist at the specific position
  this.removeAt = (position)=>{
    if(position > -1 && position < length) {
      let current = head
      let previous
      let index = 0
      if(position === 0) {
        //let "head" point to "current.next"(next node), so that it can remove the first node
        head = current.next
      } else {
        while (index++ < position) {
          //by increasing the value of index, let "previous" point to the node that is previous one of target node
          previous = current
          //let "current" point to the target
          current = current.next
        }
        //when the previous node of the target is point to the current.next, then remove the current node.
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }

  //return the index of the element
  this.indexOf = (element)=>{

  }

  this.isEmpty = ()=>{}

  this.size = ()=>{}

  this.toString = ()=>{
    let current = head
    let string = ''
    // orderly iterate the linkedlist, if current is exists, then pass the element to the string
    while (current) {
      string + current.element
      //let current point to next node
      current = current.next
    }
    return string
  }

  this.print = ()=>{}
}

//demo
const linkedlist = new LinkedList()
linkedlist.append('Mark')
linkedlist.append('Jack')
