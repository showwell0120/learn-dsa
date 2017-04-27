//Queue is a ordered list that follows the role of "First In First Out(FIFO)"
//Insert element at the last, remove element at the first

function Queue() {
  //use array to store elements
  let items = []

  //insert an element to the last of the queue
  this.enqueue = (element)=>{
    item.push(element)
  }

  //remove the first element and return it
  this.dequeue = ()=>{
    return items.shift()
  }

  //return the first element but the queue is keep the same
  this.front = ()=>{
    return items[0]
  }

  //check if the queue is empty or not
  this.isEmpty = ()=>{
    return items.length === 0
  }

  this.size = ()=>{
    return items.length
  }

  this.print = ()=>{
    console.log(items.toString())
  }
}

//Demo
const poem = new Queue()
poem.isEmpty() //true
poem.enqueue('春過ぎて')
poem.enqueue('夏来にけらし')
poem.enqueue('白妙の 衣ほすてふ')
poem.enqueue('天の香具山')
poem.front() //'春過ぎて'
var a = poem.size() //4
poem.print() //'春過ぎて,夏来にけらし,白妙の 衣ほすてふ,天の香具山'
var b = poem.dequeue() //'春過ぎて'
var c = poem.front() //'夏来にけらし'
var d = poem.size()  //3
poem.print() //'夏来にけらし,白妙の 衣ほすてふ,天の香具山'
