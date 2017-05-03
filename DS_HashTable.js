//Hash Table: implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.


function BasicHashTable() {
  let table = []
  let getHashTableCode = (key)=>{
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      //charCodeAt(): Return the Unicode of the character in a string
      hash += key.charCodeAt(i)
    }
    //Use mod(%) to progess the hash value to be smaller
    return hash % 37
  }

  this.put = (key, value)=>{
    const postion = getHashTableCode(key)
    table[position] = value
  }

  this.get = (key)=>{
    const postion = getHashTableCode(key)
    return table[position]
  }

  this.remove = (key)=>{
    const position = getHashTableCode(key)
    table[position] = undefined
  }
}

//demo1
let hashTable = new HashTable()
hashTable.put('Mark', 'mark@gmail.com')
hashTable.put('Ivy', 'ivy@gmail.com')
hashTable.put('Mary', 'mary@gmail.com')
hashTable.get('Mark')  //'mark@gmail.com'
hashTable.get('Jack')  //undefined
hashTable.remove('Mark')
hashTable.get('Mark')  //undefined

//Collision: The different keys would possibly generate the same hash value

//Handle Collision: Seperate chaining, create a linked list for each position of thetable and storing th elements in it. It required additional memory outside the HashTable instance
function LinkedList() {
  const Node = (element)=>{
    this.element = element
    this.next = null
  }
  let length = 0
  let head = null
  this.append = (element)=>{
    const node = new Node(element)
    let current
    if(head == null) {
      head = node
    } else {
      current = head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
    length++
  }
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
  this.remove = (element)=>{
    let index = this.indexOf(element)
    return this.removeAt(index)
  }
  this.removeAt = (position)=>{
    if(position > -1 && position < length) {
      let current = head
      let previous
      let index = 0
      if(position === 0) {
        head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }
  this.indexOf = (element)=>{
      var current = head
      var index = -1
      while(current) {
        if(element === current.element) {
          return index
        }
        index++
        current = current.next
      }
      return -1
  }
  this.isEmpty = ()=>{
    return length === 0
  }
  this.size = ()=>{
    return length
  }
  this.toString = ()=>{
    let current = head
    let string = ''
    while (current) {
      string + current.element
      current = current.next
    }
    return string
  }
  this.getHead = ()=>{
    return head
  }
  this.print = ()=>{}
}

function ChainingHashTable() {
  let table = []

  //create an interior class to store the original key & value
  let ValuePair = (key, value)=>{
    this.key = key
    this.value = value
  }

  let getHashTableCode = (key)=>{
    let hash = 0
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }

  this.put = (key, value)=>{
    let position = getHashTableCode(key)
    //check if the postion is initialized to be a linked list
    if(table[position] === undefined) {
      table[position] = new LinkedList()
    }
    table[position].append(new ValuePair(key, value))
  }

  this.get = (key)=>{
    let position = getHashTableCode(key)
    if(table[position] !== undefined) {
      let current = table[position].getHead()
      while(current.next) {
        if(current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      if(current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }

  this.remove = (key)=>{
    let position = getHashTableCode(key)
    if(table[position] !== undefined) {
      let current = table[position].getHead()
      while(current.next) {
        if(current.element.key === key) {
          table[position].remove(curent.element)
          if(table[position].isEmpty()) {
            table[position] = undefined
          }
          return true
        }
        current = current.next
      }
      if(current.element.key === key) {
        table[position].remove(current.element)
        if(table[position].isEmpty()) {
          table[position] = undefined
        }
        return true
      }
    }
    return false
  }
}

//Handle Collision: linear probing, the linear probing table will look onto to subsequent hash elements until the first free space is found. This traversal is known as probing the table; and as it goes by one element at a time
function ProbingHashTable() {
  let table = []
  let ValuePair = (key, value)=> {
    this.key = key
    this.value = value
  }
  let getHashTableCode = (key)=>{
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash +=key.charCodeAt(i)
    }
    return hash % 37
  }

  this.put = (key, value)=>{
    let position = getHashTableCode(key)
    if(table[position] === undefined) {
      table[position] = new ValuePair(key, value)
    } else {
      let index = ++position
      while (table[index] !== undefined) {
        index++
      }
      table[index] = new ValuePair(key, value)
    }
  }

  this.get = (key)=>{
    let position = getHashTableCode(key)
    if(table[position] !== undefined) {
      if(table[position].key === key) {
        return table[position].value
      } else {
        let index = ++position()
        while (table[index] === undefined || table[index].key !== key) {
          index++
        }
        if(table[index].key === key) {
          return table[index].value
        }
      }
    }
    return undefined
  }

  this.remove = (key)=> {
    let position = getHashTableCode(key)
    if(table[position] !== undefined) {
      if(table[position].key === key) {
        table[position] = undefined
      } else {
        let index = ++position
        while (table[index] === undefined || table[index].key !== key) {
          index++
        }
        if(table[index].key === key) {
          table[index] == undefined
        }
      }
    }
    return undefined
  }
}

//Prevent Collision: djb2
let DJB2HashTable = (key)=>{
  //5381 & 33 is just the numbers that, in testing, resulted in fewer collisions and better avalanching.
  let hash = 5381
  for (let i = 0; i < key.length; i++) {
    hash = hsah * 33 + key.charCodeAt(i)
  }

  //1013 is a numner that means a random prime
  return hash % 1013
}
